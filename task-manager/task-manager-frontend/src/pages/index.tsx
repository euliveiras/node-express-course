import type { NextPage } from "next";
import {
  Box, Flex,
} from "@chakra-ui/react";
import { Form } from "../components/Form";

const Home: NextPage = () => {
  return (
    <Flex
      justifyContent={"center"}
    >
      <Box w={640} mt={32} bgColor={"#FFFFFF"} boxShadow={"lg"} borderRadius={"md"}>
        <Form/>
      </Box>
    </Flex>
  );
};

export default Home;
