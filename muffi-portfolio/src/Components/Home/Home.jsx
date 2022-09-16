import { Box, Button, Divider, Flex, Heading, HStack, Icon,Link, Image,  Spacer,  Text } from "@chakra-ui/react"
// import "./Home.css"
import muffi from "../assets/My_Photo.jpg"
import "./Home.css"
import { GoMarkGithub } from "react-icons/go"
import { BsLinkedin } from "react-icons/bs"
import { SiInstagram } from "react-icons/si"
import {HiOutlineMail} from "react-icons/hi"
import { About } from "../About/About"
import { Skills } from "../Skills/Skills"
import Project from "../Project/Project"
import Contact from "../Contact/Contact"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Sidebar from "../Sidebar"
import DownArrow from "../DownArrow/DownArrow"
// import { Link } from "react-scroll"


export const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <Box id="Home" bgColor={"#171923"} w="100%" color="white">
            {/* main Homepage body of the content starts to align content at the center */}
            {/* <Flex border={"2px solid"}> */}
                <Flex alignItems={"center"}  direction="column" justifyContent="center" pos={"relative"}  minH="100vh"  > 
                {/* profile content starts */}
                <Flex gap="2rem" direction={{ base: "column", md: "column", lg: "row" }} alignItems="center">
                    {/* image */}
                    <Box className="Profile" bgImage={`url(${muffi})`} bgRepeat="no-repeat" bgSize="cover" bgPos={"center"} h={{base:"250px",md:"270px",lg:"320px"}} w={{base:"250px",md:"270px",lg:"320px"}}>
                    </Box>
                    {/* image */}
                    {/* name summary and social media */}
                    <Flex direction={"column"} textAlign="left" alignItems={"center"} justifyContent={"center"} gap="0.5rem">
                        <Heading textAlign={{base:"center",lg:"left"}} fontSize={{base:"45px",sm:"55px",md:"60px",lg:"70px"}} fontWeight="500"  className="popins">Mufadal Sadriwala</Heading>
                        <Text color="gray.400" fontStyle={"italic"} textAlign={"center"} fontSize={"xl"}>A Software Developer with a passion for solving problems and learning new things</Text>
                        {/* Social medias */}
                        <HStack mt="1rem" gap="0.5rem">
                            <Link  href="https://github.com/Mufadal03" isExternal><Icon h={6} w={6} as={GoMarkGithub} /></Link>
                            <Link target={"_blank"} href="https://www.linkedin.com/in/mufadal-sadri-5a20aa190/" isExternal><Icon h={6} w={6} as={BsLinkedin} /></Link>
                            <Link href="mailto:sadrimufadal@gmail.com" isExternal><Icon h={7} w={7}  as={HiOutlineMail} /></Link>
                            {/* <Link href="https://instagram.com/muffi_03" isExternal><Icon h={6} w={6} as={SiInstagram} /></Link> */}
                        </HStack>
                        {/* view resume button */}
                        <Box mt="0.5rem">
                           <a href="https://drive.google.com/file/d/1vHWmVCUbmLHl3nSxCSmneo2SCuBUrOKx/view?usp=sharing" isExternal _hover={{textDecoration:"none"}}><Button color={"white"} bgColor="#171923" variant={"outline"} _hover={{bgColor:"#171923",color:"white"}}>Resume</Button></a>
                        </Box>
                        {/* view resume button */}
                    </Flex>
                    {/* name summary and social media ends */}
                </Flex> 
                {/* profile content ends */}
                {/* <Sidebar /> */}
                    <DownArrow to={"about" } />
            </Flex>
            {/* </Flex> */}
            {/* main Homepage body of the content ends */}
            <About />
            <Project />
            <Skills />
            <Contact />
        </Box>
    )
}