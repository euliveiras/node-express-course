import type { NextPage } from "next";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Task } from "../components/Task";
import { Form } from "../components/Form";
import { api } from "../utils/axios";

type ITasks = {
  id: string;
  taskName: string;
  isCompleted: boolean;
}[];

const Home: NextPage = () => {
  const [tasks, setTasks] = useState<ITasks>([]);

  const addTask = async (taskName: string) => {
    try {
      const response = await api.post("/api/v1/tasks", { taskName });
      const task = response.data;
      setTasks((tasks) => [...tasks, task]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id: string) => {
    setTasks((oldTasks) => {
      const tasksFiltered = oldTasks.filter((task) => task.id !== id);
      return [...tasksFiltered];
    });
  };

  useEffect(() => {
    async function fetchInitialData() {
      const response = await api.get<ITasks>("/api/v1/tasks");
      const tasks = response.data;
      console.log(tasks);
      setTasks(tasks);
    }
    fetchInitialData();
  }, []);

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
          <Form addTask={addTask}/>
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
