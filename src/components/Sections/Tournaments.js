import React from "react"

import { Title, Section, MinContainer } from "../../utils"

const Tournaments = () => {
  return (
    <Section>
      <Title>Tournaments</Title>
      <Title
        fontFam="Roboto"
        fWeight="bold"
        textAlign="center"
        fStyle="italic"
        mb="20px"
      >
        Big Tournament Dropping Soon
      </Title>
      <MinContainer>
        {/**  <Row>
          <Col>1</Col>
          <Col>3</Col>
          <Col>2</Col>
        </Row> */}
      </MinContainer>
    </Section>
  )
}

export default Tournaments
