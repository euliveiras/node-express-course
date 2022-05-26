import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { GetStaticPaths, GetStaticProps } from "next";

type TaskProps = {
  id: string;
};

export default function Task({ id }: TaskProps) {
  if (id) {
    return (
      <Flex justifyContent={"center"}>
        <Box
          w={640}
          mt={32}
          bgColor={"#FFFFFF"}
          boxShadow={"lg"}
          borderRadius={"lg"}
        >
          <Box w={"100%"}>
            <Formik
              initialValues={{ taskId: id, taskName: "", isCompleted: true }}
              onSubmit={(value) => {
                console.log(value);
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
                  <InputGroup w="100%">
                    <Center justifyContent={"space-between"} w="100%">
                      <FormLabel htmlFor="isCompleted" m={0}>
                        Is completed?
                      </FormLabel>
                      <Field
                        w="auto"
                        name="isCompleted"
                        id="isCompleted"
                        type="checkbox"
                        as={Checkbox}
                      />
                    </Center>
                  </InputGroup>
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
      </Flex>
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
