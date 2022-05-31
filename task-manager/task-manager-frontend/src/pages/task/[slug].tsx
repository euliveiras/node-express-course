import {
  Box,
  Button,
  Center,
  Link,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { GetStaticPaths, GetStaticProps } from "next";
import NextLink from "next/link";
import { useTask } from "../../contexts/TaskContext";

type TaskProps = {
  id: string;
};

export default function Task({ id }: TaskProps) {
  const { handleEdit, tasks, toast } = useTask();
  const task = tasks.find((task) => task.id === id);

  if (task) {
    return (
      <Grid justifyContent={"center"}>
        <Box
          w={640}
          mt={24}
          bgColor={"#FFFFFF"}
          boxShadow={"lg"}
          borderRadius={"lg"}
        >
          <Box w={"100%"}>
            <Formik
              initialValues={{
                taskId: id,
                taskName: task.taskName,
                isCompleted: task.isCompleted,
              }}
              onSubmit={({ isCompleted, taskId: id, taskName }) => {
                try {
                  handleEdit({ id, taskName, isCompleted });
                  toast({
                    description: "Your task was successfuly edited!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right",
                  });
                } catch (err) {
                  toast({
                    title: "Error",
                    description: err.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <VStack
                  spacing={8}
                  py={8}
                  mx={20}
                  as="form"
                  onSubmit={handleSubmit}
                >
                  <Text fontFamily={"heading"} fontWeight={"700"} fontSize={24}>
                    Edit task
                  </Text>
                  <InputGroup w="100%">
                    <Center justifyContent={"space-between"} w="100%">
                      <FormLabel htmlFor="taskId" m={0}>
                        Task id
                      </FormLabel>
                      <Field
                        isReadOnly
                        w="auto"
                        name="taskId"
                        id="taskId"
                        type="text"
                        as={Input}
                      />
                    </Center>
                  </InputGroup>
                  <InputGroup w="100%">
                    <Center justifyContent={"space-between"} w="100%">
                      <FormLabel htmlFor="taskName" m={0}>
                        Name
                      </FormLabel>
                      <Field
                        w="auto"
                        name="taskName"
                        id="taskName"
                        type="text"
                        as={Input}
                      />
                    </Center>
                  </InputGroup>
                  <Center justifyContent={"space-between"} w="100%">
                    <FormLabel htmlFor="isCompleted" m={0}>
                      Is completed?
                    </FormLabel>
                    <Field
                      w="auto"
                      name="isCompleted"
                      id="isCompleted"
                      type="checkbox"
                      // as={Checkbox}
                    />
                  </Center>
                  <Button
                    variant={"solid"}
                    borderRadius={4}
                    colorScheme="purple"
                    type="submit"
                  >
                    edit task
                  </Button>
                </VStack>
              )}
            </Formik>
          </Box>
        </Box>
        <NextLink href="/" passHref>
          <Link
            // variant={"solid"}
            mt={"2rem"}
            w={"auto"}
            fontSize="2xl"
            fontWeight={"bold"}
            marginInline={"auto"}
            borderRadius={4}
            color="blackAlpha.900"
            _hover={{ textDecoration: "none", color: "blackAlpha.700" }}
            transition={"color, 0.2s"}
          >
            back to tasks
          </Link>
        </NextLink>
      </Grid>
    );
  }
  return <Text>Loading</Text>;
}

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [{ params: { slug: "" } }], fallback: true };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const slug = ctx.params?.slug as string;
  return { props: { id: slug } };
};
