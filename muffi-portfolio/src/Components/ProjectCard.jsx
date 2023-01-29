import { Box, Flex, Heading, Text,Button, Link,  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MyTag from './myTag'
import Aos from "aos"
import "aos/dist/aos.css"
const ProjectCard = ({title, App, techStack, executedIn, type, about, live, GitHub, source }) => {
    useEffect(() => {
      Aos.init({duration:2000})     
    },[])
  return (
      <Flex data-aos="fade-up"direction={{base:'column',md:"column",lg:"row"}} p='1rem'bgColor={"#151C28"} gap='1rem' border="1px solid #77BEF8" alignItems='center' >
          <Box w={{base:"auto",lg:"50%"}}  overflow={"hidden"} >
              <video height="100" w="200" autoPlay muted loop ><source src={source} type='video/mp4'/></video>
          </Box>
          <Flex w={{base:"auto",lg:"50%"}} gap=".5rem" direction={"column"}>
              <Flex gap='.5rem'  flexWrap={"wrap"}>
                  <MyTag el={type + " " + "Project"} />
                  <MyTag el={App} />
              </Flex>
              {/* <Text>{ type} Project make tag</Text> */}
              <Heading fontWeight={"md"} textDecorationLine="underline" textDecorationStyle={"double"} fontSize={{base:"xl",md:"2xl",lg:"3xl"}} fontFamily={"Unbounded"}>{title}</Heading>
              {
                  about.map((el,i) => <Text key={i} fontSize={{base:"sm",lg:"md"}}  fontFamily={"Unbounded"}>* {el}</Text>)
              }
              <Text fontSize={{base:"sm",lg:"md"}}  fontFamily={"Unbounded"}>Executed in {executedIn} Days{type==="Collaborative"?" with the team of 5 members":"" }</Text>
              <Flex gap="1rem" flexWrap={'wrap'}>
                  {
                      techStack.map((el, i) => (<MyTag key={ i} el={ el} />))
                  }
              </Flex>
              <Flex mt="1rem" gap='2rem'>
                  <Link isExternal href={live}><Button  fontFamily={"Unbounded"} p="1rem 2rem" color='#0b111e' bgColor="#77BEF8" _hover={{ bgColor: "#77BEF8" }} borderRadius="none" size={{base:"sm",lg:"md"}}>Live Site</Button></Link>
                  <Link isExternal href={GitHub}><Button  fontFamily={"Unbounded"} borderRadius="none" p="1rem 2rem" color="#77BEF8" border={"1px solid #77BEF8"} bgColor='#0b111e'size={{base:"sm",lg:"md"}}  _hover={{bgColor:'#0b111e'}}>GitHub</Button></Link>

              </Flex>
          </Flex>
   </Flex>
  )
}

export default ProjectCard