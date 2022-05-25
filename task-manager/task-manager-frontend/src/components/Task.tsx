import {
  Box,
  Center,
  keyframes,
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiTrash } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";
import NextLink from "next/link";

type TaskProps = {
  name: string;
  isCompleted: boolean;
  id: string;
  handleDelete(id: string): void;
};

const animationKeyframes = keyframes`
  0% { transform: scale(0) }
  50% { transform: scale(0.5) }
  100% { transform: scale(1)  }
`;

const animation = `${animationKeyframes} 0.3s ease-in-out`;

export const Task: React.FC<TaskProps> = ({
  id,
  isCompleted,
  name,
  handleDelete,
}) => {
  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <Flex
      as={motion.div}
      layout
      animation={animation}
      justify={"space-between"}
      boxShadow={"lg"}
      w="100%"
      align={"center"}
      h={12}
      bgColor="whiteAlpha.900"
      borderRadius={"md"}
    >
      <Center justifyContent={"space-between"}>
        <Center w={16}>
          {isCompleted && (
            <Icon as={AiOutlineCheck} color={"green"} boxSize={6} />
          )}
        </Center>
        <Text>{name}</Text>
      </Center>
      <Center pr={4} gap={4}>
        <NextLink href={`/task/${id}`} passHref>
          <ChakraLink variant={"unstyled"} _hover={{ color: "green" }}>
            <Icon as={AiOutlineEdit} />
          </ChakraLink>
        </NextLink>
        <Box
          as="button"
          _hover={{ color: "red" }}
          transition={"color 0.2s"}
          onClick={handleClick}
        >
          <Icon as={FiTrash} />
        </Box>
      </Center>
    </Flex>
  );
};
