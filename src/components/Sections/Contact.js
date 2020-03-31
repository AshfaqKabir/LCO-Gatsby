import { useForm } from "react-hook-form"
import React from "react"

import {
  Grid,
  Flex,
  Box,
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
          <Flex mb={4}>
            <FormControl isInvalid={errors.name} mr={4}>
              <Input
                name="name"
                placeholder="name"
                ref={register({ validate: validateName })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <Input
                name="email"
                type="email"
                placeholder="email"
                ref={register({ validate: validateEmail })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Textarea placeholder="Here is a sample placeholder" />
          <Button
            mt={4}
            variantColor="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </Section>
  )
}

export default Contact
