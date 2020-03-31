import { useForm } from "react-hook-form"
import React from "react"

import {
  Grid,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/core"

import { Title, Section, MinContainer } from "../../utils"

const Contact = () => {
  const { handleSubmit, errors, register, formState } = useForm()

  function validateName(value) {
    let error
    if (!value) {
      error = "Name is required"
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱"
    }
    return error || true
  }

  function validateEmail(value) {
    let error
    if (!value) {
      error = "Email is required"
    } else if (value !== "Naruto@gmail.com") {
      error = "Jeez! You're not a fan 😱"
    }
    return error || true
  }

  function onSubmit(values) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
    }, 1000)
  }

  return (
    <Section>
      <Title mb="70px">Get In Touch</Title>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Flex mb={4}> */}
          <FormControl isInvalid={errors.name} mb={4}>
            <Input
              name="name"
              placeholder="Name"
              variant="flushed"
              p={2}
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          {/**     <FormControl isInvalid={errors.email}>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                // variant="flushed"
                ref={register({ validate: validateEmail })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>*/}
          {/* </Flex> */}
          <FormControl isInvalid={errors.email} mb={4}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              variant="flushed"
              p={2}
              ref={register({ validate: validateEmail })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Textarea
            placeholder="Here is a sample placeholder"
            p={2}
            // variant="flushed"
            minHeight="200px"
          />
          <Button
            mt={4}
            variantColor="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Stack>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Phone:</Heading>
            <Text p={2}>+888 000000020, +999 111111222, +100 111111234</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Address: </Heading>
            <Text p={2}>
              LCO Basketball Ground, 55/A Dhanmondi Road-5, Dhaka
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">

            <Heading fontSize="xl" mt={4}>
              Opening Hours:{" "}
            </Heading>
            <Text p={2}>6:00 Am to 9:00 Pm</Text>
          </Box>
        </Stack>
      </Grid>
    </Section>
  )
}

export default Contact
