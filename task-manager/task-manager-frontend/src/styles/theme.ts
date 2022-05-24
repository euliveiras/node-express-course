import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        w: "100vw",
        h: "100vh",
        bgColor: "#F5F5F5",
        fontFamily: "Ubuntu, sans-serif",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
  },
});
