import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import DarkOrb from "./components/DarkOrb";
import { PresentationControls } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight
        color="#e40ff7"
        intensity={3}
        position={[1000, 0, 0]}
        castShadow
      />
      <spotLight
        color="#740ff7"
        intensity={3}
        position={[-1000, 0, 0]}
        castShadow
      />
    </>
  );
};

function Model() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <Lights />
          <PresentationControls>
            <DarkOrb />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Model;
