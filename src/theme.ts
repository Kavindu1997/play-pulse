import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f2f2f8",
      100: "#d7d7da",
      200: "#bcbcc0",
      300: "#a2a2a6",
      400: "#87878c",
      500: "#6e6e74",
      600: "#55555a",
      700: "#3d3d41",
      800: "#121212",
      900: "#0c0c12",
    },
  },
});

export default theme;
