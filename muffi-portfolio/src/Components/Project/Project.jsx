import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import DownArrow from '../DownArrow/DownArrow'
import lovoda from "../assets/Lovoda.png"
import Nature from "../assets/Nature.png"
import Anthro from "../assets/Anthro.png"



const Project = () => {
    useEffect(() => {
     Aos.init({duration:2000})   
    },[])
  return (
      <Box id="Project" pos="relative" pb="3rem">
          <Box w="80%" m="5vh auto">
              <Heading textAlign={"left"}>  Built By Me <Text as={"span"}  className="waving-hand popins">✌</Text></Heading>
              <Grid data-aos="slide-up" gridTemplateColumns={"repeat(2,1fr)"} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH="400px">
                  <GridItem  bgImage={`url(${lovoda})`} bgSize="cover" bgPos={"center"}>
                    
                  </GridItem>
                  <GridItem textAlign="left" p="2rem" pos="relative">
                      <Heading fontStyle={'oblique'} className="popins">Lovoda Clone</Heading>
                      <Flex className='popins' direction={"column"}  mt="1rem" fontSize={"lg"} gap="0.5rem"> 
                          <Text>- An Womens jewellery and accessories based website.</Text>
                          <Text>- Built with React using Chakra-Ui from scratch.</Text>
                          <Text>- Flow <ArrowForwardIcon /> Login to checkout.</Text>
                          <Text>- Used React-routing for all the routes.</Text>
                          <Text>- Created Rest-full api's for database.</Text>
                          <Text>- Completed in 1 week.</Text>

                          <Flex pos={"absolute"} bottom="10px" w="40%" justifyContent={"space-between"}>
                              <Link _hover={{textDecoration:"none"}} href="https://lovoda-by-muffi.netlify.app/" isExternal><Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link _hover={{textDecoration:"none"}} href="https://github.com/Mufadal03/better-water-9008/tree/main/lovoda" isExternal><Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid>
              <Grid  data-aos="slide-up" gridTemplateColumns={"repeat(2,1fr)"} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH="400px">
                  <GridItem textAlign="left" p="2rem" pos="relative">
                      <Heading fontStyle={'oblique'} className="popins">Nature's Basket Clone</Heading>
                      <Flex className='popins' direction={"column"}  mt="1rem" fontSize={"lg"} gap="0.5rem"> 
                          <Text>- An Indian grocery and gourmet food delivery.</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- Built with HTML CSS & JAVASCRIPT from scratch.</Text>
                          <Text>- Flow <ArrowForwardIcon /> Login to checkout.</Text>
                          <Text>- Used JSON server for database.</Text>
                          <Text>- Completed in 1 week.</Text>


                          <Flex pos={"absolute"} bottom="10px" w="40%" justifyContent={"space-between"}>
                              <Link href='https://nature-sbasket.netlify.app/' _hover={{textDecoration:"none"}} isExternal><Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live site</Button></Link>
                              <Link href="https://github.com/Mufadal03/Nature-sBasket" isExternal _hover={{textDecoration:"none"}}><Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>
                  <GridItem bgImage={`url(${Nature})`} bgSize="cover" bgPos={"center"}>
                      
                  </GridItem>

              </Grid>
              <Grid data-aos="slide-up" gridTemplateColumns={"repeat(2,1fr)"} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH="400px">
                  <GridItem  bgImage={`url(${Anthro})`} bgSize="cover" bgPos={"center"}>
                      
                  </GridItem>
                  <GridItem textAlign="left" p="2rem" pos="relative">
                      <Heading fontStyle={'oblique'} className="popins">Anthropologie's Clone</Heading>
                      <Flex className='popins' direction={"column"}  mt="1rem" fontSize={"lg"} gap="0.5rem"> 
                          <Text>- An Womens jewellery ,clothing and accessories.</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- Built with HTML CSS & advance JAVASCRIPT from scratch.</Text>
                          <Text>- Flow <ArrowForwardIcon /> Login to checkout.</Text>
                          <Text>- Used import export to increase reusability.</Text>
                          <Text>- Completed in 1 week.</Text>

                          <Flex pos={"absolute"}  bottom="10px" w="40%" justifyContent={"space-between"}>
                              <Link href="https://wonderful-malasada-e63214.netlify.app/" isExternal _hover={{textDecoration:"none"}}> <Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link href="https://github.com/Mufadal03/Anthropologie-Unit3" isExternal _hover={{textDecoration:"none"}}> <Button _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid>
          </Box>
          {/* <Flex justifyContent={"center"} >
              <DownArrow to="Skill"/>
          </Flex> */}
          
    </Box>
  )
}

export default Project