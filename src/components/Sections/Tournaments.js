import React from "react"

import { Grid, Box } from "@chakra-ui/core"

import { Title, Section, MinContainer } from "../../utils"

const Tournaments = () => {
  return (
    <Section>
      {/** <Title>Tournaments</Title>*/}
      <Title
        fontFam="Roboto"
        fSize="50px"
        fWeight="bold"
        textAlign="center"
        fStyle="italic"
        mb="25px"
      >
        Big Tournament Dropping Soon
      </Title>
      <MinContainer>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box h="40" bg="blue.500" />
          <Box h="40" bg="blue.500" />
          <Box h="40" bg="blue.500" />
        </Grid>
      </MinContainer>
    </Section>
  )
}

export default Tournaments
