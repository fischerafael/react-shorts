import { Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const UseStateInput = () => {
  const [input, setInput] = useState("");

  console.log("INPUT =", input);

  return (
    <Flex w="full" justify="center">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input de Texto"
        w="full"
        maxW="container.sm"
      />
    </Flex>
  );
};
