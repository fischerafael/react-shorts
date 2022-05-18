import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useCounterRedux } from "./hooks/useCounterRedux";

const index = () => {
  const [incrementBy, setIncrementBy] = useState<number>(0);
  const { handleDecrement, handleIncrement, handleIncrementByAmount, counter } =
    useCounterRedux(incrementBy);

  return (
    <VStack w="full" minH="100vh" justify="center" bg="gray.900" color="white">
      <HStack w="full" justify="center" maxW="container.md">
        <Button onClick={handleDecrement} colorScheme="whatsapp" w="full">
          Decrementar
        </Button>
        <Text textAlign="center" w="full">
          {counter}
        </Text>
        <Button onClick={handleIncrement} colorScheme="whatsapp" w="full">
          Incrementar
        </Button>
        <Input
          value={incrementBy}
          onChange={(e) => setIncrementBy(+e.target.value)}
        />
        <Button
          onClick={handleIncrementByAmount}
          colorScheme="whatsapp"
          w="full"
        >
          Incrementar por {incrementBy}
        </Button>
      </HStack>
    </VStack>
  );
};

export default index;
