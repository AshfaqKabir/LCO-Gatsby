import React from "react"

import {
  Flex,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/core"

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex align="center">
      <Box>
        <Button onClick={onOpen}>
          <Text>Box 1</Text>
        </Button>
      </Box>
      <Box>
        <Button onClick={onOpen}>
          <Text>Box 1</Text>
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default Nav
