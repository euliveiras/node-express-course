import type { NextPage } from "next";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Form } from "../components/Form";
import { Task } from "../components/Task";
import { useState } from "react";

type ITasks = {
  id: string;
  task: string;
  isCompleted: boolean;
}[];

const Home: NextPage = () => {
  const [tasks, setTasks] = useState<ITasks>(() => {
    return [
      { id: "1", task: "Jantar", isCompleted: true },
      { id: "2", task: "Almoçar", isCompleted: false },
    ];
  });

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
          <Form />
        </Box>

        <VStack w={640} spacing={4}>
          {tasks.map((task) => <Task key={task.id}/>)}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Home;
