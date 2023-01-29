import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import aboutSVG from "../assets/aboutSVG.svg"
import Line from '../Components/Line'
import "../index.css"
import Aos from "aos"
import "aos/dist/aos.css"
const About = () => {
  useEffect(() => {
    Aos.init({duration:2000})   
  },[])
  return (
      <Box id="about" w={{base:"95vw",md:"95vw",lg:"90vw"}} m="5rem auto" overflow={'hidden'}>
      <Line />
      <Heading fontWeight={"md"}fontSize={{base:"2xl",md:"3xl",lg:"4xl"}} fontFamily="cursive">About Me</Heading>
          <Flex pt="1rem" alignItems={{md:"center",lg:"start"}} gap="1rem">
              <Flex data-aos="slide-right" w={{base:"100%",md:"50%"}} bgPos="center" bgSize={'contain'} bgRepeat={"no-repeat"} direction="column" pt="1rem">
            <Heading fontSize={{md:"xl",lg:"2xl"}} fontWeight={"md"} fontFamily='cursive'><Text as={"span"} className='waving-hand' fontSize={{md:"2xl",lg:"3xl"}}>👋</Text>Hii !</Heading>
            <Text fontSize={{md:"lg ",lg:"2xl"}} fontWeight={'md'} fontFamily="cursive">My name is<Text as={"span"} fontWeight={"bold"} color='#E6990B'> Mufadal Sadriwala</Text> and I am a <Text as={"span"} color='#E6990B' fontWeight={"bold"}>Full Stack Web Developer</Text>,Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining <Text as={"span"} color='#E6990B' fontWeight={"bold"}>MERN</Text> based web applications. Looking forward to joining a progressive and challenging work environment.</Text>
              </Flex>
              <Box w='50%' data-aos="slide-left" display={{base:"none",md:"block"}}>
                  <Image transform={'scaleX(-1)'} h="auto" src={aboutSVG} />
               </Box>
      </Flex>
    </Box>
  )
}

export default About