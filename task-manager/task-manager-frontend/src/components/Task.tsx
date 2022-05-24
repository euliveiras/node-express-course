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
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";

type TaskProps = {
  name: string;
  isCompleted: boolean;
  id: string;
};

export const Task: React.FC<TaskProps> = ({ id, isCompleted, name }) => {
  return (
    <Flex
      justify={"space-between"}
      boxShadow={"lg"}
      w="100%"
      align={"center"}
      h={12}
      bgColor="whiteAlpha.900"
      borderRadius={"md"}
    >
      <Center pl={4}>
        {isCompleted && (
          <Icon as={AiOutlineCheck} color={"green"} mr={8} boxSize={6} />
        )}
        <Text>{name}</Text>
      </Center>
      <Center pr={4}>
        <Button variant={"unstyled"} _hover={{ color: "green" }}>
          <Icon as={AiOutlineEdit} />
        </Button>
        <Button variant={"unstyled"} _hover={{ color: "red" }}>
          <Icon as={FiTrash} />
        </Button>
      </Center>
    </Flex>
  );
};
