import React from "react";
import {
  Box,
  Link,
  Image,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import github from "../Images/github.svg";
import twitter from "../Images/twitter.svg";
import { Link as Scroll } from "react-scroll";

function Navbar() {
  return (
    <Box borderColor="#C749AA" borderWidth="2px" display="flex" p="5">
      <Box display="flex" alignItems="center" flex="1">
        <Link href="https://twitter.com/migscrypto" mr="5" ml="5">
          <Image src={twitter}></Image>
        </Link>
        <Link href="https://github.com/migsdeving">
          <Image src={github}></Image>
        </Link>
      </Box>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <Heading fontSize="2xl">MG</Heading>
      </Box>
      <Box display="flex" flex="1" justifyContent="end">
        <Menu m="4">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            textColor="white"
            borderRadius="0"
            bg="none"
            _active={{ borderColor: "#F456F1", borderWidth: "2px" }}
            _hover={{ bg: "#F456F1", textColor: "black" }}
          />
          <MenuList
            bg="black"
            borderRadius="0"
            borderWidth="2px"
            borderColor="#F456F1"
          >
            <Scroll to="aboutSkills" smooth={true} duration={1000}>
              <MenuItem
                _focus={{ bg: "#F456F1" }}
                _active={{ bg: "black" }}
                display={["none", "none", "block", "block"]}
              >
                About & Skills
              </MenuItem>
            </Scroll>
            <Scroll to="about" smooth={true} duration={1000}>
              <MenuItem
                _focus={{ bg: "#F456F1" }}
                _active={{ bg: "black" }}
                display={["block", "block", "none", "none"]}
              >
                About
              </MenuItem>
            </Scroll>
            <Scroll to="skills" smooth={true} duration={1000}>
              <MenuItem
                _focus={{ bg: "#F456F1" }}
                _active={{ bg: "black" }}
                display={["block", "block", "none", "none"]}
              >
                Skills
              </MenuItem>
            </Scroll>
            <Scroll to="experience" smooth={true} duration={1000}>
              <MenuItem _focus={{ bg: "#F456F1" }} _active={{ bg: "black" }}>
                Experience
              </MenuItem>
            </Scroll>
            <Scroll to="contact" smooth={true} duration={1000}>
              <MenuItem _focus={{ bg: "#F456F1" }} _active={{ bg: "black" }}>
                Contact Me
              </MenuItem>
            </Scroll>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}

export default Navbar;
