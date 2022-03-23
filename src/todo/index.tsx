import { Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTask] = useState<string>("");

  function handleCreateTask() {
    if (!taskInput) return;
    const newTasks = [...tasks, taskInput];
    setTasks(newTasks);
    setTask("");
  }

  function handleRemoveTask(removedTaskIndex: number) {
    const filteredTasks = tasks.filter(
      (task, taskIndex) => taskIndex !== removedTaskIndex
    );
    setTasks(filteredTasks);
  }

  return (
    <Flex
      w="screen"
      minH="100vh"
      justify="center"
      align="flex-start"
      bg="gray.900"
      color="green.300"
    >
      <VStack w="full" maxW="container.sm" p="4" spacing="4">
        <Input
          value={taskInput}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
          h="12"
        />

        <Button
          isDisabled={!taskInput ? true : false}
          h="12"
          w="full"
          colorScheme="green"
          onClick={handleCreateTask}
        >
          Create Task
        </Button>

        <VStack w="full" spacing="4">
          {tasks?.map((task, index) => {
            return (
              <HStack
                bg="gray.800"
                w="full"
                p="4"
                borderRadius="md"
                key={index}
                justify="space-between"
              >
                <Text>{task}</Text>

                <Button
                  onClick={() => handleRemoveTask(index)}
                  variant="outline"
                  colorScheme="green"
                >
                  Excluir
                </Button>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </Flex>
  );
};
