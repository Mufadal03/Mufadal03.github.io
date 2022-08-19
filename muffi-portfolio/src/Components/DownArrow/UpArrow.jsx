import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'
import { BiUpArrowAlt } from "react-icons/bi"
import "./DownArrow.css"
const UpArrow = () => {
    return (
        <Flex direction={"row-reverse"}><Link to="Home" smooth={true} offset={-10} duration={1000} ><Icon className='bounce' border={"2px solid"} borderRadius="full" h="10" w="10"as={BiUpArrowAlt}/></Link></Flex>
  )
}

export default UpArrow