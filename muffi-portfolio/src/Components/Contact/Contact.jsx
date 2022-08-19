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
        <Box pos="relative" id='Contact' w="80%" m={"auto"} minH="70vh" textAlign="left">
            <Heading className='popins'>Get in touch <Text className='waving-hand' as={"span"}>🤙</Text></Heading>
            <Box mt="3rem">
                <Heading className='popins' lineHeight="10" fontSize="4xl" my="1rem" letterSpacing="wide">Thanks for stopping by,If you think we might be a good fit for one another, give me a call 🇮🇳  or send me an  email 📧.</Heading>
            </Box>
            <Flex direction={"column"}  my="3rem" gap="1rem"> 
                <Flex  alignItems={"center"} gap="0.5rem"><Icon h={7} w={7}  as={HiOutlineMail} />  <Link href='mailto:sadrimufadal@gmail.com'_hover={{textDecoration:"none"}}> <Text fontSize={"2xl"}> sadrimufadal@gmail</Text></Link></Flex>
               <Flex alignItems={"center"} gap="0.5rem"><Icon h={7} w={7} as={ HiPhone} />  <Link _hover={{textDecoration:"none"}}href='tel:9819798586'><Text fontSize={"2xl"}> +91 9819798586</Text></Link></Flex>
                <Flex gap={"1rem"} mt="1rem">
                    <Link href="https://github.com/Mufadal03" isExternal><Icon h={8} w={8} as={GoMarkGithub} /></Link>
                    <Link href="https://www.linkedin.com/in/mufadal-sadri-5a20aa190/"  isExternal><Icon h={8} w={8} as={BsLinkedin} /></Link>
                    <Link href="https://instagram.com/muffi_03" isExternal><Icon h={8} w={8} as={SiInstagram} /></Link>
                </Flex>
            </Flex>
            <UpArrow />
            {/* <DownArrow to="Home" Name='arrow-up' /> */}
      </Box>
  )
}

export default Contact