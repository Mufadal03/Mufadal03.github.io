import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import DownArrow from '../DownArrow/DownArrow'
import lovoda from "../assets/Lovoda.mp4"
import Nature from "../assets/Nature.mp4"
// import Anthro from "../assets/Anthro.png"
import Anthro from "../assets/Anthro.mp4"
import Coschedule from "../assets/Coschedule.mp4"
import Timecamp from "../assets/Timecamp.mp4"

const Project = () => {
    useEffect(() => {
     Aos.init({duration:2000})   
    },[])
  return (
      <Box id="Project" pos="relative" pb="3rem">
          <Box w={{base:"90%",md:"90%",lg:"80%"}} m="5vh auto">
              <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} textAlign={"left"}>  Built By Me <Text as={"span"} className="waving-hand popins">✌</Text></Heading>
               <Grid data-aos="slide-up" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gridTemplateRows={{ base:"250px auto",md:"300px auto",lg:"auto"}} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH={{base:"auto",lg:"400px"}}>
                  <GridItem  overflow={"hidden"}  > <video  autoPlay muted loop ><source src={Timecamp} type='video/mp4'/></video></GridItem>
                  <GridItem  textAlign="left"p={{base:"0.5rem",md:"1rem",lg:"2rem"}} >
                      <Heading fontStyle={'oblique'}fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} className="popins">Timecamp's Clone </Heading>
                      <Flex className='popins' direction={"column"} mt="1rem" fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }} gap={{ base: "0rem", sm: "0.1rem", md: "0.2rem", lg: "0.5rem" }}> 
                          <Text fontStyle={"italic"}>Full Stack App</Text>
                          <Text>- An Time and task management website</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- FRONTEND : React , Chakra-UI , CSS.</Text>
                          <Text>- BACKEND : MongoDB , Nodejs , Expressjs.</Text>
                          <Text>- Executed in 5 days.</Text>

                           <Flex mt="1rem" gap="2rem">
                              <Link href="https://timecamp-clone.netlify.app/" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link href="https://github.com/Mufadal03/Timecamp-Clone.git" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid>
                <Grid data-aos="slide-up" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gridTemplateRows={{ base:"250px auto",md:"300px auto",lg:"auto"}} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH={{base:"auto",lg:"400px"}}>
                  <GridItem  overflow={"hidden"}  > <video  autoPlay muted loop ><source src={Coschedule} type='video/mp4'/></video></GridItem>
                  <GridItem  textAlign="left"p={{base:"0.5rem",md:"1rem",lg:"2rem"}} >
                      <Heading fontStyle={'oblique'}fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} className="popins">Coschedule's Clone</Heading>
                       <Flex className='popins' direction={"column"}  mt="1rem" fontSize={{base:"sm",sm:"sm",md:"md",lg:"lg"}} gap={{base:"0rem",sm:"0.1rem",md:"0.2rem",lg:"0.5rem"}}> 
                          <Text>- An Calendary and task management website</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- Built with React , Redux and Chakra-Ui from scratch.</Text>
                          <Text>- Used Redux to main states in app and to store data.</Text>
                          <Text>- Executed in 5 days.</Text>

                           <Flex mt="1rem" gap="2rem">
                              <Link href="https://coschedulesite.netlify.app/" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link href="https://github.com/sangle2022/ripe-receipt-7221.git" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid>
              <Grid data-aos="slide-up" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gridTemplateRows={{ base:"250px auto",md:"300px auto",lg:"auto"}} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH={{base:"auto",lg:"400px"}}>
            <GridItem overflow={"hidden"}> <video autoPlay muted loop ><source src={lovoda} type='video/mp4'/></video></GridItem>
                  <GridItem  textAlign="left" p={{base:"0.5rem",md:"1rem",lg:"2rem"}} >
                      <Heading fontStyle={'oblique'} fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} className="popins">Lovoda Clone</Heading>
                      <Flex className='popins' direction={"column"}  mt="1rem" fontSize={{base:"sm",sm:"sm",md:"md",lg:"lg"}} gap={{base:"0rem",sm:"0.1rem",md:"0.2rem",lg:"0.5rem"}}>
                          <Text>- An Womens jewellery and accessories based website.</Text>
                          <Text>- Built with React using Chakra-Ui from scratch.</Text>
                          <Text>- Used React-routing for all the routes.</Text>
                          <Text>- Individual project.</Text>
                          <Text>- Created Rest-full api's for database.</Text>
                          <Text>- Executed in 5 days.</Text>

                          <Flex mt="1rem" gap="2rem">
                              <Link _hover={{textDecoration:"none"}} href="https://lovoda-by-muffi.netlify.app/" isExternal><Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link _hover={{textDecoration:"none"}} href="https://github.com/Mufadal03/Lovoda-Clone" isExternal><Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid>
             <Grid data-aos="slide-up" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gridTemplateRows={{ base:"250px auto",md:"300px auto",lg:"auto"}} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH={{base:"auto",lg:"400px"}}>
                <GridItem overflow={"hidden"}> <video autoPlay muted loop ><source src={Nature} type='video/mp4'/></video></GridItem>
                <GridItem  textAlign="left" p={{base:"0.5rem",md:"1rem",lg:"2rem"}} >
                      <Heading fontStyle={'oblique'}fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} className="popins">Nature's Basket Clone</Heading>
                      <Flex className='popins' direction={"column"}  mt="1rem" fontSize={{base:"sm",sm:"sm",md:"md",lg:"lg"}} gap={{base:"0rem",sm:"0.1rem",md:"0.2rem",lg:"0.5rem"}}> 
                          <Text>- An Indian grocery and gourmet food delivery website.</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- Built with HTML CSS & JAVASCRIPT from scratch.</Text>
                          <Text>- Used JSON server for database.</Text>
                          <Text>- Executed in 5 days.</Text>


                          <Flex mt="1rem" gap="2rem">
                              <Link href='https://nature-sbasket.netlify.app/' _hover={{textDecoration:"none"}} isExternal><Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live site</Button></Link>
                              <Link href="https://github.com/Mufadal03/Nature-sBasket" isExternal _hover={{textDecoration:"none"}}><Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}}_hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>
                      

              </Grid>
              {/* <Grid  data-aos="slide-up" gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gridTemplateRows={{ base:"250px auto",md:"250px auto",lg:"auto"}} p="1rem" m="5vh auto" borderRadius={"lg"} border={"2px solid"} minH={{base:"auto",lg:"400px"}}>
                 <GridItem overflow={"hidden"}> <video autoPlay muted loop ><source src={Anthro} type='video/mp4'/></video></GridItem>
                  <GridItem  textAlign="left"p={{base:"0.5rem",md:"1rem",lg:"2rem"}} >
                      <Heading fontStyle={'oblique'}fontSize={{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"}} className="popins">Anthropologie's Clone</Heading>
                       <Flex className='popins' direction={"column"}  mt="1rem" fontSize={{base:"sm",sm:"sm",md:"md",lg:"lg"}} gap={{base:"0rem",sm:"0.1rem",md:"0.2rem",lg:"0.5rem"}}> 
                          <Text>- An Womens jewellery ,clothing and accessories.</Text>
                          <Text>- Colaborative project team of 5.</Text>
                          <Text>- Built with HTML CSS & advance JAVASCRIPT from scratch.</Text>
                          <Text>- Used import export to increase reusability.</Text>
                          <Text>- Executed in 5 days.</Text>

                           <Flex mt="1rem" gap="2rem">
                              <Link href="https://wonderful-malasada-e63214.netlify.app/" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Live Site</Button></Link>
                              <Link href="https://github.com/Mufadal03/Anthropologie-Unit3" isExternal _hover={{textDecoration:"none"}}> <Button size={{base:"sm",sm:"sm",md:"sm",lg:"md"}} _hover={{backgroundColor:"black",color:"white"}} variant={"outline"}>Github</Button></Link>
                          </Flex>
                      </Flex>
                  </GridItem>

              </Grid> */}
                
          </Box>
          {/* <Flex justifyContent={"center"} >
              <DownArrow to="Skill"/>
          </Flex> */}
          
    </Box>
  )
}

export default Project