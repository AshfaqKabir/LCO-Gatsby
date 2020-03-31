/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  Stack,
} from "@chakra-ui/core"

import Header from "./header"
import Nav from "./Nav"
// import "./layout.css"

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "red.500", dark: "red.200" }
  const color = { light: "white", dark: "gray.800" }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1170,
        }}
      >
        <Nav />
        <Text mb={3}>Color mode: {colorMode}</Text>
        <Button vairantColor="teal" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Box>
          <Box flex="1" mb={4} bg={bgColor[colorMode]} color={color[colorMode]}>
            This box's style will change based on the color mode.
          </Box>
        </Box>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built By Ashfaq</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
