import React from "react"

import { Link } from "gatsby"

import { /* Heading, Flex, */ Box } from "@chakra-ui/core"
import styled from "@emotion/styled"

import { Section, Title } from "../../utils"

const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Masonry>
        <Box className="box">
          <div className="content">
            <h2>The Rise Of The World</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate voluptatem corporis blanditiis obcaecati libero fugit
            </p>
          </div>
        </Box>
        <Box className="box">
          <div className="content">
            <h2>The Rise Of The World2</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate voluptatem corporis blanditiis obcaecati libero fugit
            </p>
          </div>
        </Box>
        <Box className="box">
          <div className="content">
            <h2>The Rise Of The World</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate voluptatem corporis blanditiis obcaecati libero fugit
            </p>
          </div>
        </Box>
        <Box className="box">
          <div className="content">
            <h2>The Rise Of The World</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate voluptatem corporis blanditiis obcaecati libero fugit
            </p>
          </div>
        </Box>
        <Box className="box">
          <div className="content">
            <h2>The Rise Of The World</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate voluptatem corporis blanditiis obcaecati libero fugit
            </p>
          </div>
        </Box>
      </Masonry>
    </Section>
  )
}

const Masonry = styled.div`
  /* position: relative; */
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: auto auto auto;
  grid-template-rows: minmax(300px, 1fr);
  grid-gap: 20px;
  grid-auto-flow: dense;
  .box {
    background: #333;
    padding: 20px;
    padding-right: 5px;
    display: grid;
    font-size: 16px;
    color: #fff;
    transition: 0.5s;
    min-height: 300px;
    h2 {
      font-family: "Suez One";
      font-weight: bold;
      font-size: 35px;
      line-height: 1.2;
    }
    &:first-child {
      background-size: cover;
      grid-column: span 3;
      grid-row: span 1;
      h2 {
        font-family: "Suez One";
        font-weight: bold;
      }
    }
    &:nth-child(2) {
      background-size: cover;
      grid-column: span 1;
      grid-row: span 12;
    }
    &:nth-child(3) {
      background-size: cover;
      grid-column: span 2;
      grid-row: span 6;
    }
    &:nth-child(4) {
      background-size: cover;
      grid-column: span 2;
      grid-row: span 6;
    }
    &:last-child {
      background-size: cover;
      grid-column: span 3;
      grid-row: span 1;
      h2 {
        font-family: "Suez One";
        font-weight: bold;
      }
    }
    @media (max-width: 991px) {
      grid-column: unset !important;
      grid-row: unset !important;
    }
    a {
      color: #fff;
    }
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-template-rows: minmax(auto, auto);
  }
`

export default Team
