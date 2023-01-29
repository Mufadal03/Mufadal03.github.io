import React from 'react'
import {Tag} from "@chakra-ui/react"
const MyTag = ({el,color="#77BEF8",bg="#0b111e"}) => {
  return (
    <Tag boxShadow={" #77BEF8 0px 3px 8px"} bgColor={bg} textTransform={'uppercase'} w='fit-content' p="5px 10px" color={color} border='1px solid #77BEF8'fontSize={{base:"xs",md:"sm",lg:"md"}} borderRadius={"none"}  fontFamily={"Unbounded"}>{el }</Tag>
  )
}

export default MyTag