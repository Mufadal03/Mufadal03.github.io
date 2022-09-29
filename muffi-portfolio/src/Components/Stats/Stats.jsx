import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import "../Home/Home.css"
const Stats = () => {
  return (
      <Flex alignItems={"center"} color={"white"} minH="60vh" mb="5rem">
          <Box w={{base:"90%",lg:"80%"}} m="auto"className='popins' >
              <Grid gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} rowGap={{base:"3rem",md:"4rem",lg:"6rem"}} gap="2rem">
                  <GridItem  >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>1200+<sub>Hrs</sub></Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>Coding</Heading>
                  </GridItem>
                  <GridItem >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>500+<sub>Que</sub></Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>DSA</Heading>
                  </GridItem>
                  <GridItem >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>100+<sub>Hrs</sub></Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>Soft Skills</Heading>
                  </GridItem>
                  <GridItem >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>260+</Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>Git commits</Heading>
                  </GridItem>
                  <GridItem >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>3+</Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>Colaborative projects</Heading>
                  </GridItem>
                  <GridItem >
                      <Heading fontWeight={"600"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}}>5+</Heading>
                      <Heading fontWeight="600" mt="1rem"fontSize={{base:"lg",md:"xl",lg:"2xl"}}>Individual Projects</Heading>
                  </GridItem>
                  
             </Grid>
          </Box>
    </Flex>
  )
}

export default Stats