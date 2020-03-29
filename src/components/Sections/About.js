import React from "react"

import art from "../../images/artimg-3.png"

import { SimpleGrid, Box, Text } from "@chakra-ui/core"

import { Title, Section } from "../../utils"

const About = () => {
  return (
    <Section>
      <Title>About Us</Title>
      <SimpleGrid columns={2} spacing={10}>
        <Box p={5}>
          <Text fontSize="20px" pt={5} textAlign="justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            aliquam impedit explicabo quia perspiciatis voluptates illo,
            cupiditate ea possimus distinctio necessitatibus odit dolorem
            officia fuga. Impedit sunt optio maiores deserunt eius culpa nisi
            harum mollitia, natus dolores tenetur! Velit? Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Text>

          <Text fontSize="20px" pt={5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            aliquam impedit explicabo quia dolor sit amet, consectetur
            adipiscing elit. Feugiat euismod velit orci, id nunc turpis turpis
            libero.
          </Text>
        </Box>
        <Box>
          <img src={art} alt="" />
        </Box>
      </SimpleGrid>
      {/** <Row>
        <Col>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            aliquam impedit explicabo quia perspiciatis voluptates illo,
            cupiditate ea possimus distinctio necessitatibus odit dolorem
            officia fuga. Impedit sunt optio maiores deserunt eius culpa nisi
            harum mollitia, natus dolores tenetur! Velit?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, earum.
          </p>
        </Col>
        <Col>
          <img src={art} alt="" />
        </Col>
      </Row>
       */}
    </Section>
  )
}

export default About
