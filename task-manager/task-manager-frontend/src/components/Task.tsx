import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";

export const Task = () => {
  return (
    <Flex
      justify={"space-between"}
      boxShadow={"lg"}
      w="100%"
      align={"center"}
      h={12}
      bgColor="whiteAlpha.900"
      borderRadius={"sm"}
    >
      <Center pl={4}>
        <Icon as={AiOutlineCheck} color={"green"} mr={8} boxSize={6} />
        <Text>Task</Text>
      </Center>
      <Center pr={4}>
        <Icon as={GrAdd} color={"green"} />
        <Icon as={FiTrash} ml={2} />
      </Center>
    </Flex>
  );
};
