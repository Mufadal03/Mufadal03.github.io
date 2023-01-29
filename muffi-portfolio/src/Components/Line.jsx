import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Line = ({dir="row"}) => {
  return (
      <Flex w="100%"gap="1rem" alignItems={"center"} my='1.5rem' direction={dir}>
          <Box w='12px' borderRadius="50%" h="12px" bgColor='red'></Box>
          <Box w='12px' borderRadius="50%" h="12px" bgColor='yellow'></Box>
          <Box w='12px'  borderRadius="50%" h="12px" bgColor='lightGreen'></Box>
          <Box w='95%' h="4px" bgColor='#77BEF8'></Box>
    </Flex>
  )
}

export default Line