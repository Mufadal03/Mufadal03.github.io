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
            <Flex color={"gray.300"}  direction={"column"} w={{base:"90%",md:"90%",lg:"80%"}}  alignItems={"center"}  textAlign={"left"} gap="3rem" mb="3rem" >
                <Box data-aos="fade-right">
                    <Heading fontWeight={"hairline"} lineHeight={{base:"7",sm:"8",md:"8",lg:"10"}} fontSize={{base:"xl",sm:"xl",md:"2xl",lg:"3xl"}} my="1rem" letterSpacing={{base:"normal",sm:"normal",md:"wider",lg:"widest"}}><Text fontSize={{base:"xl",md:"2xl",lg:"3xl"}} as={"span"} className="waving-hand">👋</Text>Hii !<br />My name is <Text color={"white"} as={"span"} fontWeight="semibold" className="popins">Mufadal Sadriwala</Text> and I am a <Text  as={"span"} color={"white"} className="popins"fontWeight="semibold">Full Stack Web Developer</Text>,Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining <Text className="popins"as={"span"} color={"white"} fontWeight="semibold">MERN</Text> based web applications. Looking forward to joining a progressive and challenging work environment.</Heading>
                </Box>
                <Box data-aos="fade-left">
                    <Heading fontSize={{base:"xl",sm:"xl",md:"2xl",lg:"3xl"}}lineHeight={{base:"7",sm:"8",md:"8",lg:"10"}} fontWeight={"hairline"} letterSpacing={{base:"normal",sm:"normal",md:"wider",lg:"widest"}}>I love to work on exciting projects that test what I've learnt, whilst being exposed to the power and potential of the ever-evolving technologies around us. I'm always looking for better, and more importantly, ethical and accessible ways to solve the common problems we are faced with day-to-day.</Heading>
                </Box>
            </Flex>
            <DownArrow to={"Project" } />
            
        </Flex>
    )
}