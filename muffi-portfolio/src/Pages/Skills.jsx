import { Box, Flex, Grid, GridItem, Heading, Text,Icon } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { skillDB } from '../assets/skillsDB'
import { ToolsDB } from '../assets/skillsDB'
import Aos from "aos"
import "aos/dist/aos.css"
const Skills = () => {
   useEffect(() => {
      Aos.init({duration:2000})     
    },[])
  return (
    <Flex id="skills" direction={"column"} gap='3rem' w="90%" m="auto" minH={"100vh"} >
      <Box  my="2rem">
      <Heading  fontFamily={"Unbounded"}fontSize={{base:"2xl",md:"3xl",lg:"4xl"}} fontWeight="md">Professional Skills</Heading>
      <Grid gridTemplateColumns={{base:`repeat(2,1fr)`,sm:`repeat(3,1fr)`,md:`repeat(4,1fr)`,lg:`repeat(6,1fr)`}} gap='2rem' mt='2rem'>
        {
          skillDB.map((skill) => (
            <GridItem data-aos="fade-up" key={skill.id}>
              <Flex  direction={"column"} bgColor={"#151C28"} border="1px solid #77BEF8" boxShadow={" #77BEF8 0px 3px 8px"} alignItems={"center"} p="1rem" borderRadius={"10px"} gap='.5rem' _hover={{ color: "#77BEF8",transform:"scale(1.1,1.1)"}}>
                <Icon color={skill.color  }  boxSize={{base:"2.5rem",sm:"2.8rem",md:"3rem",lg:"5rem"}} as={skill.Icon}/>
                <Text  fontFamily={"Unbounded"} fontSize={{base:"md",sm:"md",md:"lg",lg:"xl"}} textTransform={'capitalize'}>{skill.name}</Text>
              </Flex>
            </GridItem>
          ))
        }

        </Grid>
      </Box>
      <Box  my="2rem">
      <Heading  fontFamily={"Unbounded"} fontSize={{base:"2xl",md:"3xl",lg:"4xl"}} fontWeight="md">Tools I use</Heading>
      <Grid gridTemplateColumns={{base:`repeat(2,1fr)`,md:`repeat(4,1fr)`,lg:`repeat(4,1fr)`}} gap='2rem' mt='2rem'>
        {
          ToolsDB.map((tool) => (
            <GridItem data-aos="fade-up" key={tool.id} alignItems='center' justifyItems={"center"}>
              <Flex direction={"column"} bgColor={"#151C28"} border="1px solid #77BEF8" boxShadow={" #77BEF8 0px 3px 8px"} alignItems={"center"} p="1rem" borderRadius={"10px"} gap='.5rem' _hover={{ color: "#77BEF8",transform:"scale(1.1,1.1)"}}>
                <Icon boxSize={{base:"2.5rem",sm:"2.8rem",md:"3rem",lg:"5rem"}} as={tool.Icon}/>
                <Text  fontFamily={"Unbounded"}  fontSize={{base:"md",sm:"md",md:"lg",lg:"xl"}} textTransform={'capitalize'}>{tool.name}</Text>
              </Flex>
            </GridItem>
          ))
        }

        </Grid>
      </Box>
   </Flex>
  )
}

export default Skills