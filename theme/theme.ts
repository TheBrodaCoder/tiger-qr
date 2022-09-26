import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans-semi-condensed";
import "@fontsource/galada";

const theme = extendTheme({
  fonts: {
    encode: `'encode sans semi condensed', sans-serif`,
    galada: `'galada', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "encode",
        letterSpacing: "0.04em",
      },
    },
    Text: {
      defaultProps: {
        textStyle: "p",
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: { base: "48px", md: "72px" },
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h2: {
      fontSize: { base: "36px", md: "48px" },
      fontWeight: "semibold",
      lineHeight: "110%",
    },
    h3: {
      fontSize: { base: "32px", md: "40px" },
      fontWeight: "bold",
      lineHeight: "100%",
      letterSpacing: "-0.08em",
    },
    p: {
      fontSize: { base: "20px", md: "24px" },
      fontWeight: "medium",
      lineHeight: "110%",
    },
  },
  colors: {
    brand: {
      primary: "#1f114d",
      secondary: "#1D1D1D",
    },
  },
  styles: {
    global: {
      "html, body, #root": {
        h: "100%",
        minHeight: "100%",
      },
    },
  },
});

export default theme;
