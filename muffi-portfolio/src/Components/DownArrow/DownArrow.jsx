import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'
import "./DownArrow.css"
import{IoChevronDownCircleOutline} from "react-icons/io5"
const DownArrow = ({to,Name="arrow-down"}) => {
    return (
        <Link  to={to} smooth={true} offset={-10} duration={1000}>
            <Box className={Name}>
            
            </Box>
            {/* <Icon className='bounce' h="10" w="10" as={IoChevronDownCircleOutline} /> */}
        </Link>
  )
}

export default DownArrow