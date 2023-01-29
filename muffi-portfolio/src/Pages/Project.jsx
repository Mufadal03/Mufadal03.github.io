import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../index.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { ProjectDB } from '../assets/projectsDB'
import ProjectCard from '../Components/ProjectCard'
const Project = () => {
    useEffect(() => {
         Aos.init({duration:2000})  
    },[])
  return (
      <Box id='project' minH="100vh" w={{base:"95vw",md:"95vw",lg:"90vw"}} m="auto" py='2rem'>
          <Heading fontWeight={"md"}  fontFamily={"Unbounded"}fontSize={{base:"2xl",md:"3xl",lg:"4xl"}}>Projects <Text as="span" className="waving-hand">✌</Text></Heading>
          <Flex gap="2rem" direction='column'  w={{base:"95vw",md:"95vw",lg:"90vw"}} m="2rem auto">
              {
                  ProjectDB.map((item,i) => (
                      <ProjectCard key={i} {...item} />
                  ))
              }
          </Flex>
      </Box>
  )
}

export default Project