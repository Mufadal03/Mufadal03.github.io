import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { HiOutlineMail,HiPhone } from 'react-icons/hi'
import { SiInstagram } from 'react-icons/si'
import DownArrow from '../DownArrow/DownArrow'
import UpArrow from '../DownArrow/UpArrow'
import "../Home/Home.css"
const Contact = () => {
    return (
        <Box pos="relative" id='Contact' w={{base: "90%", lg: "80%"}} m={"auto"} minH="70vh" textAlign="left">
            <Heading className='popins' fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}}>Get in touch <Text className='waving-hand' as={"span"}>🤙</Text></Heading>
            <Box mt="2rem">
                <Heading className='popins' lineHeight={{base:"7",sm:"8",md:"9",lg:"10"}} fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} my="1rem" letterSpacing={{base:"normal",sm:"normal",md:"wider",lg:"widest"}}>Thanks for stopping by,If you think we might be a good fit for one another, give me a call 🇮🇳  or send me an  email 📧.</Heading>
            </Box>
            <Flex direction={"column"} mt="2rem" mb="3rem" gap={{base:"0.2rem",sm:"0.4rem",md:"0.6rem",lg:"1rem"}}> 
                <Flex  alignItems={"center"} gap="0.5rem"><Icon h={{base:"5",md:"6",lg:"7"}} w={{base:"5",md:"6",lg:"7"}} as={HiOutlineMail} />  <Link href='mailto:sadrimufadal@gmail.com'_hover={{textDecoration:"none"}}> <Text fontSize={{base:"md",sm:"md",md:"xl",lg:"2xl"}}> sadrimufadal@gmail</Text></Link></Flex>
               <Flex alignItems={"center"} gap="0.5rem"><Icon h={{base:"5",md:"6",lg:"7"}} w={{base:"5",md:"6",lg:"7"}} as={ HiPhone} />  <Link _hover={{textDecoration:"none"}}href='tel:9819798586'><Text fontSize={{base:"md",sm:"md",md:"xl",lg:"2xl"}}> +91 9819798586</Text></Link></Flex>
                <Flex gap={"1rem"} mt="1rem">
                    <Link href="https://github.com/Mufadal03" isExternal><Icon h={{base:"5",md:"6",lg:"8"}} w={{base:"5",md:"6",lg:"8"}} as={GoMarkGithub} /></Link>
                    <Link href="https://www.linkedin.com/in/mufadal-sadri-5a20aa190/"  isExternal><Icon h={{base:"5",md:"6",lg:"8"}} w={{base:"5",md:"6",lg:"8"}} as={BsLinkedin} /></Link>
                    <Link href="https://instagram.com/muffi_03" isExternal><Icon h={{base:"5",md:"6",lg:"8"}} w={{base:"5",md:"6",lg:"8"}} as={SiInstagram} /></Link>
                </Flex>
            </Flex>
            <UpArrow />
            {/* <DownArrow to="Home" Name='arrow-up' /> */}
      </Box>
  )
}

export default Contact