import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TaskProvider } from "../contexts/TaskContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </ChakraProvider>
  );
}

export default MyApp;
