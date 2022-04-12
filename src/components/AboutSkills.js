import React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";
import react from "../Images/react.png";
import chakraUI from "../Images/chakraUI.png";
import web3js from "../Images/web3js.png";
import solidity from "../Images/solidity.png";
import javascript from "../Images/javascript.png";
import figma from "../Images/figma.png";
import nextjs from "../Images/nextjs.png";
import nodejs from "../Images/nodejs.png";

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
              I'm a web developer and product manager currently focused on web3.
              A speedy learner and a problem solver. I'm an active member of the
              NFT and crypto community where I spend a lot of time interacting
              and investing. Passionate about innovation in the web3 space and
              how it can impact our digital future. I'm interested in working on
              innovative projects in the web3 space where I'm open to both
              development and product management.
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
                  <Image src={chakraUI} />
                </Box>
                <Text mt="3" textAlign="center">
                  Chakra UI
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
                  <Image src={javascript} />
                </Box>
                <Text mt="3" textAlign="center">
                  JS
                </Text>
              </GridItem>
              <GridItem
                _hover={{
                  transform: "scale(1.2)",
                  "-webkit-transition": "transform 0.2s ease-in-out",
                }}
              >
                <Box borderWidth="2px" borderColor="#F456F1">
                  <Image src={nodejs} />
                </Box>
                <Text mt="3" textAlign="center">
                  NodeJS
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
