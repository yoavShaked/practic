import React from "react";
import { QueryProvider } from "./containers/QueryProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "@chakra-ui/theme";
import { RoutersIndex } from "./containers/RoutersIndex";

function App() {
  return (
    <QueryProvider>
      <ChakraProvider theme={baseTheme}>
        <RoutersIndex />
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
