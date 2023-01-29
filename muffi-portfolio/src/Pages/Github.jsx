import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import AboutImg from "../assets/about.png"
const Github = () => {
  return (
      <Box w="90%" m='2rem auto' fontFamily={"Unbounded"}>
          <Flex alignItems="center" direction={"column"} gap="2rem" mt='2rem'>
              <Heading fontWeight={"md"}  fontFamily={"Unbounded"}fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}  color="#77BEF8">Days I Code</Heading>
               <GitHubCalendar username="mufadal03"
                  color="#77BEF8"
                  blockSize={15}
                  blockMargin={8}
              />
         </Flex>
    </Box>
  )
}

export default Github