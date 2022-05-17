import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const index = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);
  const [isDisabled, setDisabled] = useState(true);

  const calculateImc = () => {
    if (weight <= 0) {
      alert("Insira um peso válido");
      return;
    }
    if (height <= 0) {
      alert("Insira uma altura válida");
      return;
    }

    const imc = weight / (height * height);
    const formattedImc = imc.toFixed(2);
    setResult(+formattedImc);
  };

  useEffect(() => {
    if (weight > 0 && height > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [weight, height]);

  const reset = () => {
    setWeight(0);
    setHeight(0);
    setResult(0);
  };

  return (
    <VStack bg="blue.50" w="full" minHeight={"100vh"} justify="center">
      <VStack w="full" maxW={"container.sm"}>
        <Text>Calculadora de IMC</Text>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
          placeholder="Peso (kg)"
        />
        <Input
          type="number"
          onChange={(e) => setHeight(+e.target.value)}
          value={height}
          placeholder="Altura (m)"
        />
        <HStack w="full">
          <Button w="full" variant="ghost" colorScheme="blue" onClick={reset}>
            Resetar
          </Button>
          <Button
            isDisabled={isDisabled}
            w="full"
            colorScheme="blue"
            onClick={calculateImc}
          >
            Calcular
          </Button>
        </HStack>

        {result > 0 && (
          <HStack w="full" justify="space-between">
            <Text>Seu IMC é:</Text>
            <Text>{result}</Text>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default index;
