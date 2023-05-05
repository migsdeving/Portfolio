import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as Scroll } from "react-scroll";
import figma from "../Images/figma.png";
import graphql from "../Images/graphql.png";
import nextjs from "../Images/nextjs.png";
import react from "../Images/react.png";
import solidity from "../Images/solidity.png";
import tailwind from "../Images/tailwind.png";
import typescript from "../Images/typescript.png";
import web3js from "../Images/web3js.png";

function AboutSkills() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h={["inherit", "inherit", "100vh", "100vh"]}
    >
      <Box id="aboutSkills">
        <SimpleGrid columns={[1, 1, 2, 2]} gap={50}>
          <Box
            display="flex"
            flexDir="column"
            justifyContent={["center", "center", "left", "left"]}
            id="about"
            h={["100vh", "100vh", "inherit", "inherit"]}
          >
            <Heading fontSize="3xl">About Me</Heading>
            <Text mt="10">
              Hi, I'm Miguel a frontend developer specializing in web3 and
              Blockchain gaming. I have experience with many modern web dev
              technologies including React, Next.js, and . I'm passionate about
              creating decentralized games and constantly expanding my knowledge
              of this innovative technology. Let's work together to bring your
              vision to life.
            </Text>
            <Scroll to="contact" smooth={true} duration={1000}>
              <Button mt="5" p="5" mr="5" variant="fill">
                {" "}
                Contact Me
              </Button>
            </Scroll>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={["center", "center", "left", "left"]}
            id="skills"
            mt={[40, 40, 0, 0]}
            h={["100vh", "100vh", "inherit", "inherit"]}
          >
            <Box>
              <Heading fontSize="3xl" textAlign="center">
                Skills
              </Heading>
            </Box>
            <Grid
              mt="10"
              templateColumns="repeat(4, 1fr)"
              templateRows="repeat(2, 1fr)"
              gap={[0, 0, 6, 6]}
            >
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={react} />
                </Box>
                <Text mt="3" textAlign="center">
                  ReactJS
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={nextjs} />
                </Box>
                <Text mt="3" textAlign="center">
                  NextJS
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={tailwind} />
                </Box>
                <Text mt="3" textAlign="center">
                  Tailwind
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={web3js} />
                </Box>
                <Text mt="3" textAlign="center">
                  Web3.js
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={solidity} />
                </Box>
                <Text mt="3" textAlign="center">
                  Solidity
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={typescript} padding={5} />
                </Box>
                <Text mt="3" textAlign="center">
                  Typescript
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={graphql} />
                </Box>
                <Text mt="3" textAlign="center">
                  GraphQL
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={figma} />
                </Box>
                <Text mt="3" textAlign="center">
                  Figma
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default AboutSkills;
