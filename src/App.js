import { React } from "react";
import "./App.css";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import theme from "./components/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="black"
        textColor="white"
        fontFamily="Audiowide"
        textAlign={["center", "center", "left", "left"]}
      >
        <Container maxW="container.xl" pt="10">
          <Navbar />
          <Hero />
          <AboutSkills />
          <Experience />
          <Contact />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
