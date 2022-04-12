import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Audiowide, sans-serif",
    body: "Audiowide, sans-serif",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {},

      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        fill: {
          boxShadow: "none",
          fontWeight: "bold",
          borderWidth: "2px",
          background: "#F456F1",
          borderColor: "#F456F1",
          borderRadius: "0",
          fontSize: "sm",
          _hover: { bg: "none" },
        },
        outline: {
          boxShadow: "none",
          fontWeight: "bold",
          borderWidth: "2px",
          background: "black",
          borderColor: "#F456F1",
          borderRadius: "0",
          fontSize: "sm",
          _hover: { bg: "#F456F1" },
        },
        // 4. We can override existing variants
      },
    },
  },
});

export default theme;
