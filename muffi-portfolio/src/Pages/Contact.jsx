import { Box, Flex, Grid, GridItem, Heading, Image,Icon, Text, Link } from '@chakra-ui/react'
import React from 'react'
import {contact}  from '../assets/contactDB'
const Contact = () => {
  return (
      <Box id='contact'minH="50vh " w="90%" m="auto" pb='2rem'>
          {/* <Line dir='row-reverse' /> */}
          <Heading  fontFamily={"Unbounded"}fontWeight='md'fontSize={{base:"2xl",md:"3xl",lg:"4xl"}} textAlign={"center"}>Connect With Me</Heading>
          <Grid w={{base:"90vw",lg:"80vw"}} m="auto" mt='2rem' gridTemplateColumns={{base:"repeat(1,250px)",md:"repeat(2,300px)",lg:"repeat(4,1fr)"}} gap="2rem" alignContent={"center"} justifyContent='center'>
              {
                  contact.map((item,i) => (
                      <GridItem key={i}>
                          
                              <Flex gap="0.5rem" direction={"column"} borderRadius={"20px"} h="200px" border="1px solid #77BEF8" bgColor={"#151C28"} alignItems="center" justifyContent={"center"}>
                              <Icon as={item.Icon} boxSize={{base:"2rem",sm:"2.2rem",md:"2.5rem",lg:"3rem"}} />
                              
                              <Text fontSize={{base:"md",md:"lg"}} fontFamily={"Unbounded"}>{item.name}</Text>
                              <Link href={item.link} isExternal><Text fontSize={{base:"md",md:"lg"}}   fontFamily={"Unbounded"}>{ item.value}</Text>
                          </Link>
                          </Flex>
                      </GridItem>
                  ))
              }
          </Grid>
    </Box>
  )
}

export default Contact