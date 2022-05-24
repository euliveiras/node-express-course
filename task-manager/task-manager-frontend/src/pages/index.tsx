import type { NextPage } from "next";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { Form } from "../components/Form";
import { Task } from "../components/Task";

const Home: NextPage = () => {
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

        <VStack w={640}  spacing={4} >
          <Task />
          <Task />
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Home;
