import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React from "react";

export const Form = () => {
  return (
    <Box w={"100%"}>
      <Formik initialValues={{ task: "" }} onSubmit={() => console.log("Olá")}>
        {({ handleSubmit, errors, touched }) => (
          <VStack spacing={8} py={8} mx={20} as="form" onSubmit={handleSubmit}>
            <Text fontFamily={"heading"} fontWeight={"700"} fontSize={24}>
              Task manager
            </Text>
            <InputGroup>
              <FormControl isInvalid={!!errors.task && touched.task}>
                <Field
                  name="task"
                  id="task"
                  type="text"
                  as={Input}
                  placeholder="e.g wash dishes"
                  validate={(value) => {
                    if (value.length <= 5) {
                      return "Must contain 6 characters";
                    }
                  }}
                />
                <FormErrorMessage>{errors.task}</FormErrorMessage>
              </FormControl>
              <InputRightElement w="auto">
                <Button
                  variant={"solid"}
                  borderLeftRadius={0}
                  colorScheme="purple"
                  type="submit"
                >
                  submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        )}
      </Formik>
    </Box>
  );
};
