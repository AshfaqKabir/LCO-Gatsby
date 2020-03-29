import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/Sections/About"
import Tournaments from "../components/Sections/Tournaments"
import Team from "../components/Sections/Team"
import FAQ from "../components/Sections/FAQ"
import Contact from "../components/Sections/Contact"

import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  Stack,
} from "@chakra-ui/core"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "red.500", dark: "red.200" }
  const color = { light: "white", dark: "gray.800" }

  return (
    <Layout>
      <SEO title="Home" />
      {/*   <Box bg={bgColor[colorMode]} color color={color[colorMode]}>*/}
      <About />
      <Tournaments />
      <Team />
      <FAQ />
      <Contact />
      <Heading size="md" mb={5}>
        Hello World
      </Heading>
      <Text mb={3}>Color mode: {colorMode}</Text>
      <Button vairantColor="teal" onClick={toggleColorMode}>
        Toggle color mode
      </Button>

      <Text mt={3}>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box>
        <Box flex="1" mb={4} bg={bgColor[colorMode]} color={color[colorMode]}>
          This box's style will change based on the color mode.
        </Box>
        <Button size="sm" onClick={toggleColorMode}>
          Toggle Mode
        </Button>
      </Box>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
