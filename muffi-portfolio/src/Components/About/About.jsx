import {Box, Divider, Flex, Heading, Spacer, Text} from "@chakra-ui/react"
import "../Home/Home.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import DownArrow from "../DownArrow/DownArrow"
export const About = () => {
    useEffect(() => {
     Aos.init({duration:2000})   
    },[])
    return (
        <Flex id="about" pos={"relative"} direction={"column"}   minH="100vh" justifyContent={"center"} alignItems="center" >
            <Flex color={"gray.300"}  direction={"column"} w="80%"  alignItems={"center"}  textAlign={"left"} gap="5rem" >
                <Box data-aos="fade-right">
                    <Heading fontWeight={"hairline"} lineHeight="10" fontSize="3xl" my="1rem" letterSpacing="widest"><Text fontSize={"4xl"} as={"span"} className="waving-hand">👋</Text>Hii !<br />My name is <Text color={"white"} as={"span"} fontWeight="semibold" className="popins">Mufadal Sadriwala</Text> and I am a <Text  as={"span"} color={"white"} className="popins"fontWeight="semibold">Full Stack Web Developer</Text>,<br />Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining <Text className="popins"as={"span"} color={"white"} fontWeight="semibold">MERN</Text> based web applications. Looking forward to joining a progressive and challenging work environment.</Heading>
                </Box>
                <Box data-aos="fade-left">
                    <Heading fontSize="3xl"lineHeight="10" fontWeight={"hairline"} letterSpacing="widest">I love to work on exciting projects that test what I've learnt, whilst being exposed to the power and potential of the ever-evolving technologies around us. I'm always looking for better, and more importantly, ethical and accessible ways to solve the common problems we are faced with day-to-day.</Heading>
                </Box>
            </Flex>
            <DownArrow to={"Project" } />
            
        </Flex>
    )
}