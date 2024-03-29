import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";
import Model from "../model";

function Hero() {
  return (
    <Box
      h="100vh"
      display="flex"
      alignItems={["flex-start", "flex-start", "center", "center"]}
      mt={[150, 150, 0, 0]}
    >
      <SimpleGrid alignItems="center" columns={[1, 1, 2, 2]} gap={50}>
        <Box>
          <Heading fontSize="3xl">
            Hi! I'm Miguel.<br></br> I make frontend development fun.
          </Heading>
          <Scroll to="contact" smooth={true} duration={1000}>
            <Button mt="5" p="5" mr="5" variant="fill">
              {" "}
              Contact Me
            </Button>
          </Scroll>
        </Box>
        <Box display={["none", "none", "flex", "flex"]} h="42vh">
          <Model />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Hero;
