import React from "react";
import {
  Heading,
  Box,
  Image,
  useDisclosure,
  Fade,
  Text,
  Link,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eighteighteight from "../Images/888project.jpg";
import shapes from "../Images/shapesproject.jpg";
import cryptogem from "../Images/thecryptogem.jpg";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiWeb3Dotjs,
  SiSolidity,
  SiWordpress,
} from "react-icons/si";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      position="absolute"
      right="-50px"
      top="43%"
      zIndex="60"
      bg="none"
      size="lg"
      fontSize="30px"
      aria-label="Previous"
      color="#F456F1"
      icon={<IoIosArrowDropright />}
      onClick={onClick}
      className="slickRight"
      borderWidth="0px"
      borderRadius="0"
      _focus={{ borderWidth: "0px" }}
      _hover={{ bg: "none" }}
    ></IconButton>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      position="absolute"
      left="-50px"
      top="43%"
      zIndex="50"
      borderRadius="0"
      borderWidth="0px"
      bg="none"
      size="lg"
      fontSize="30px"
      aria-label="Previous"
      color="#F456F1"
      icon={<IoIosArrowDropleft />}
      onClick={onClick}
      className="slickRight"
      _focus={{ borderWidth: "0px" }}
      _hover={{ bg: "none" }}
    ></IconButton>
  );
}

function Experience() {
  const { isOpen, onToggle } = useDisclosure();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box
      id="experience"
      pb="20"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mt={["150", "130", "150", "150"]}
      mb={["150", "130", "0", "0"]}
      minHeight="0px"
      minWidth="0px"
    >
      <Heading
        display="block"
        fontSize="3xl"
        textAlign="center"
        mb="10"
        mr="auto"
        ml="auto"
      >
        Experience
      </Heading>

      <Box display={["none", "none", "block", "block"]}>
        <Slider {...settings}>
          <Box>
            <Box
              onMouseEnter={onToggle}
              onMouseLeave={onToggle}
              borderWidth="2px"
              borderColor="#F456F1"
              position="relative"
            >
              <Fade in={isOpen}>
                <Link href="https://www.888innercircle.com/" isExternal>
                  <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    className="Overlay"
                    zIndex="100"
                    position="absolute"
                    h="100%"
                    w="100%"
                    bg="black"
                    opacity="90%"
                  >
                    <Text m="10" fontSize="md">
                      I was hired by{" "}
                      <Link
                        href="https://twitter.com/crypto888crypto"
                        isExternal
                      >
                        888
                      </Link>{" "}
                      to remake the website for his project called The 888 Inner
                      Circle. I worked closely with him and his team to ensure
                      all the features and styles were implemented. On this
                      project I was the frontend developer.
                    </Text>
                    <HStack>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<FaReact />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        React
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiChakraui />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        ChakraUI
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiJavascript />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        Javascript
                      </Button>
                    </HStack>
                  </Box>
                </Link>
              </Fade>
              <Image zIndex="3" src={eighteighteight} />
            </Box>
            <Heading fontSize="2xl" textAlign="center" mt="5">
              888 Inner Circle
            </Heading>
          </Box>
          <Box>
            <Box
              onMouseEnter={onToggle}
              onMouseLeave={onToggle}
              borderWidth="2px"
              borderColor="#F456F1"
              position="relative"
            >
              <Fade in={isOpen}>
                <Link href="https://shapesproject.xyz/" isExternal>
                  <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    className="Overlay"
                    zIndex="100"
                    position="absolute"
                    h="100%"
                    w="100%"
                    bg="black"
                    opacity="90%"
                  >
                    <Text m="10" fontSize="md">
                      Shapes is a work-in-progress NFT project I founded where
                      we explore art with simple geometric shapes. I worked on
                      all the frontend development including the web3
                      integration and smart contract.
                    </Text>
                    <HStack>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<FaReact />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        React
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiChakraui />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        ChakraUI
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiJavascript />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        Javascript
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiWeb3Dotjs />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        Web3.js
                      </Button>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiSolidity />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        Solidity
                      </Button>
                    </HStack>
                  </Box>
                </Link>
              </Fade>
              <Image zIndex="3" src={shapes} />
            </Box>
            <Heading fontSize="2xl" textAlign="center" mt="5">
              Shapes Project
            </Heading>
          </Box>
          <Box>
            <Box
              onMouseEnter={onToggle}
              onMouseLeave={onToggle}
              borderWidth="2px"
              borderColor="#F456F1"
              position="relative"
            >
              <Fade in={isOpen}>
                <Link href="https://thecryptogem.com/" isExternal>
                  <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    className="Overlay"
                    zIndex="100"
                    position="absolute"
                    h="100%"
                    w="100%"
                    bg="black"
                    opacity="90%"
                  >
                    <Text m="10" fontSize="md">
                      The Crypto Gem is an informational blog about
                      cryptocurrencies. The goal with this website was to rank
                      the articles for crypto related keywords and monetize it
                      with ads and affiliate links for exchanges. This blog is
                      currently ranked for thousands of keywords and gets
                      hundreds of visits per month.
                    </Text>
                    <HStack>
                      <Button
                        variant="outline"
                        borderRadius="none"
                        borderWidth="2px"
                        borderColor="#F456F1"
                        opacity="100%"
                        leftIcon={<SiWordpress />}
                        _hover={{ bg: "none" }}
                        cursor="default"
                      >
                        WordPress
                      </Button>
                    </HStack>
                  </Box>
                </Link>
              </Fade>
              <Image zIndex="3" src={cryptogem} />
            </Box>
            <Heading fontSize="2xl" textAlign="center" mt="5">
              The Crypto Gem
            </Heading>
          </Box>
        </Slider>
      </Box>
      <Box
        display={["flex", "flex", "none", "none"]}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Box>
          <Box borderWidth="2px" borderColor="#F456F1">
            <Heading fontSize="2xl" textAlign="center" mt="5">
              888 Inner Circle
            </Heading>
            <Image zIndex="3" src={eighteighteight} />
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              zIndex="100"
            >
              <Text m="10" fontSize="md">
                I was hired by{" "}
                <Link href="https://twitter.com/crypto888crypto" isExternal>
                  888
                </Link>{" "}
                to remake the website for his project called The 888 Inner
                Circle. I worked closely with him and his team to ensure all the
                features and styles were implemented. On this project I was the
                frontend developer.
              </Text>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<FaReact />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                React
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiChakraui />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                ChakraUI
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiJavascript />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
                mb="5"
              >
                Javascript
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt="5">
          <Box borderWidth="2px" borderColor="#F456F1">
            <Heading fontSize="2xl" textAlign="center" mt="5">
              Shapes Project{" "}
            </Heading>
            <Image zIndex="3" src={shapes} />
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              zIndex="100"
            >
              <Text m="10" fontSize="md">
                Shapes is a work-in-progress NFT project I founded where we
                explore art with simple geometric shapes. I worked on all the
                frontend development including the web3 integration and smart
                contract.
              </Text>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<FaReact />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                React
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiChakraui />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                ChakraUI
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiJavascript />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                Javascript
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiWeb3Dotjs />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
              >
                Web3.js
              </Button>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiSolidity />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
                mb="5"
              >
                Solidity
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt="5">
          <Box borderWidth="2px" borderColor="#F456F1">
            <Heading fontSize="2xl" textAlign="center" mt="5">
              The Crypto Gem{" "}
            </Heading>
            <Image zIndex="3" src={cryptogem} />
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              zIndex="100"
            >
              <Text m="10" fontSize="md">
                The Crypto Gem is an informational blog about cryptocurrencies.
                The goal with this website was to rank the articles for crypto
                related keywords and monetize it with ads and affiliate links
                for exchanges. This blog is currently ranked for thousands of
                keywords and gets hundreds of visits per month.
              </Text>
              <Button
                variant="outline"
                borderRadius="none"
                borderWidth="2px"
                borderColor="#F456F1"
                opacity="100%"
                leftIcon={<SiWordpress />}
                _hover={{ bg: "none" }}
                cursor="default"
                mt="2"
                mb="5"
              >
                Wordpress
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
