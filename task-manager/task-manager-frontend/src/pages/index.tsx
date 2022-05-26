import type { NextPage } from "next";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Task } from "../components/Task";
import { Form } from "../components/Form";
import { api } from "../utils/axios";
import { useTask } from "../contexts/TaskContext";

type ITasks = {
  id: string;
  taskName: string;
  isCompleted: boolean;
}[];

const Home: NextPage = () => {
  const { addTask, handleDelete, tasks } = useTask();

  return (
    <Flex justifyContent={"center"}>
      <VStack spacing={16}>
        <Box
          w={640}
          mt={32}
          bgColor={"#FFFFFF"}
          boxShadow={"lg"}
          borderRadius={"lg"}
        >
          <Form addTask={addTask} />
        </Box>

        <VStack w={640} spacing={4}>
          {tasks.map((task) => (
            <Task
              id={task.id}
              isCompleted={task.isCompleted}
              name={task.taskName}
              key={task.id}
              handleDelete={handleDelete}
            />
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Home;
