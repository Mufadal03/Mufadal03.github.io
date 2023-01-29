import { Flex, Heading, Image, Text, Icon, Link} from '@chakra-ui/react'
import React from 'react'
import Profile from "../assets/Profile.jpg"
import { GoMarkGithub } from "react-icons/go"
import { BsLinkedin } from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
const Hero = () => {
  return (
      <Flex id="Home" w={{ base: "90vw", md: "95vw", lg: "85vw" }} alignItems="center" minH="90vh" m="auto">
          <Flex w="100%"direction={{base:"column",lg:"row"}} alignItems='center'>
              <Flex alignItems={"center"} justifyContent="center" w={{base:"auto",lg:"40%"}} >
                  <Image w='auto' h={{base:"250px",sm:"280px",md:"320px",lg:"380px"}} className='Profile' src={Profile} />
              </Flex>
              <Flex color="white" w={{base:"auto",lg:"60%"}} direction="column" justifyContent={'center'} gap=".5rem" alignItems={{base:"center",lg:"start"}}>
                  <Heading textAlign={"center"} fontFamily={"Unbounded"} fontWeight="md" fontSize={{base:"3xl",sm:"3xl",md:"4xl",lg:"5xl"}}>Mufadal Sadriwala</Heading>
                  <Heading fontStyle={"italic"} fontFamily={"Unbounded"} className="myFont"  fontWeight="md" color="#E6990B" fontSize={{base:"2xl",sm:"2xl",md:"3xl",lg:"4xl"}}>Full Stack Developer</Heading>
                  <Text fontSize={{base:"md",md:"lg",lg:"xl"}} fontStyle='italic' textAlign={{base:"center",lg:"left"}} color="gray"  fontFamily={"Unbounded"}className="myFont" >A Software Developer with a passion for solving problems and learning new things.</Text>
                  <Flex mt='1rem' gap={'1.5rem'} alignItems={"center"}>
                      <Link isExternal href="https://github.com/Mufadal03"><Icon boxSize={{base:"1.8rem",sm:"2rem",md:"2.2rem",lg:"2.5rem"}} as={GoMarkGithub} /></Link>
                      <Link isExternal href='https://www.linkedin.com/in/mufadal-sadri-5a20aa190/'><Icon boxSize={{base:"1.8rem",sm:"2rem",md:"2.2rem",lg:"2.5rem"}} as={BsLinkedin} /></Link>
                      <Link isExternal href='mailto:sadrimufadal@gmail.com'><Icon boxSize={{base:"1.8rem",sm:"2rem",md:"2.2rem",lg:"2.5rem"}} as={HiOutlineMail} /></Link>
                  </Flex>
              </Flex>
          </Flex>
   </Flex>
  )
}

export default Hero