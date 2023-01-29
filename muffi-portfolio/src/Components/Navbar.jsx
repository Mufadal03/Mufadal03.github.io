import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, useDisclosure,Icon, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi"
import "../index.css"
const Navbar = () => {
    const {isOpen,onClose,onOpen} = useDisclosure()
  return (
      <Flex bgColor="hsl(219,48%,8%)" boxShadow="dark-lg" pos={"sticky"} top={0} zIndex={100} justifyContent='space-between' p="1.5rem" alignItems={"center"} color='white'> 
          <Box><Heading color='#77BEF8' fontFamily="BestermindRegular">Mufadal Sadri</Heading></Box>
          <Box display={{base:"none",sm:"none",md:"none",lg:"block"}}>
              <Flex  gap='1rem'  fontFamily={"Unbounded"} alignItems='center'>
              <Link to="Home" smooth={true} offset={-100} duration={1000}>HOME</Link>
              <Link to="about" smooth={true} offset={-90} duration={1000}>ABOUT</Link>
              <Link to="project" smooth={true} offset={-50} duration={1000}>PROJECTS</Link>
              <Link to="skills" smooth={true} offset={-100} duration={1000}>SKILLS</Link>
          <Link to="contact" smooth={true} offset={0} duration={1000}>CONTACT</Link>
          <a target="_blank" href="https://drive.google.com/file/d/18BTM1P9lTs-8d8Y8EeoAZzISLhSPmCkG/view" smooth={true} offset={-10} duration={1000}><Button bgColor={"inherit"} border='1px solid #77BEF8'_hover={{bgColor:"inherit"}}>RESUME</Button></a>
             </Flex>
          </Box>
          <Icon h="10" w={6} as={GiHamburgerMenu} display={{ base: "block", sm: "block", md: "block" ,lg:"none"}} onClick={onOpen}></Icon>
          <Drawer isOpen={isOpen}
            placement='right'
            onClose={onClose}
              size={"full"}
          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody className='drawer' style={{backgroundColor:"hsl(219,48%,8%)",color:"#77BEF8"}}>
                    <Flex gap='2rem' direction={"column"} alignItems="center" fontFamily={"Unbounded"}justifyContent={"center"} h='100vh'> 
              <Link onClick={() => onClose()}  to="Home" smooth={true} offset={-100} duration={1000}>HOME</Link>
                        <Link onClick={()=>onClose()}  to="about" smooth={true} offset={-100} duration={1000}>ABOUT</Link>
                        <Link onClick={()=>onClose()}  to="project" smooth={true} offset={-100} duration={1000}>PROJECTS</Link>
                        <Link onClick={()=>onClose()}  to="skills">SKILLS</Link>
              <Link onClick={() => onClose()}  to="contact" smooth={true} offset={-10} duration={1000}>CONTACT</Link>
              <Link onClick={()=>onClose()} to="skills">SKILLS</Link>
              <a onClick={() => onClose()} target="_blank" href="https://drive.google.com/file/d/18BTM1P9lTs-8d8Y8EeoAZzISLhSPmCkG/view" smooth={true} offset={-10} duration={1000}><Button bgColor={"inherit"} border='1px solid #77BEF8' color="white"_hover={{bgColor:"inherit"}}>RESUME</Button></a>
                    </Flex>
                  </DrawerBody>
              </DrawerContent>
          </Drawer>
     </Flex>
  )
}

export default Navbar