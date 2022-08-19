import { Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import{Link} from "react-scroll"
import { HiOutlineHome } from "react-icons/hi"
import {SiAboutdotme} from "react-icons/si"
const Sidebar = () => {
    return (
        <VStack border={"2px solid"} borderRadius={'full'} pos="fixed" top={"40%"} right="5%" gap="1rem" py="1rem" px="0.5rem"> 
                <Link  to="Home" smooth={true} offset={0} duration={500}>Home</Link>
                <Link  to="about" smooth={true} offset={0} duration={1000}>About</Link>
                <Link  to="Project" smooth={true} offset={-50} duration={1000}>Project</Link>
                <Link  to="Skill" smooth={true} offset={0} duration={1000}>Skill</Link>
      </VStack>
  )
}

export default Sidebar