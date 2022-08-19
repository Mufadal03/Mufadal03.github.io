import { Box, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import DownArrow from "../DownArrow/DownArrow"
const skills = [
    {
        id:1,
        name: "HTML5",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
    },
    {
        id:2,
        name: "CSS 3",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
    },
    {
        id:3,
        name: "JAVASCRIPT",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
    },
    {
        id:4,
        name: "REACT",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
    },
    {
        id:5,
        name: "REDUX",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
    },
    {
        id:6,
        name: "NODE JS",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
    },
    {
        id:7,
        name: "MONGO DB",
        img:"https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
    },
    {
        id:8,
        name: "BOOTSTRAP",
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
    },
    {
        id:9,
        name: "CHAKRA UI",
        img:"https://avatars.githubusercontent.com/u/54212428?v=4"
    },
    {
        id:10,
        name: "GIT",
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
    },
    {
        id:11,
        name: "GITHUB",
        img:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
        id:12,
        name: "JEST",
        img:"https://miro.medium.com/max/600/1*RQwRLQ0yyCvYmRn_Nst5yg.png"
    }
    // {
    //     id:,
    //     name: "",
    //     img:""
    // }
]

export const Skills = () => {
     useEffect(() => {
     Aos.init({duration:2000})   
    },[])
    return (
        <Flex pos={"relative"} id="Skill" h="100vh"  direction={"column"} justifyContent={"center"}alignItems="center" >
            <Heading w="80%" m=" 5px auto" textAlign={"left"} size={"xl"}>Tools I Use</Heading>
            <Grid data-aos="fade-left" gridTemplateColumns={"repeat(6,1fr)"} gridRowGap={"2rem"} w="80%" m="25px auto" >
                {
                    skills.map((item) => (
                        <GridItem >
                            <VStack mb="2rem">
                                <Image h="150px" src={item.img} />
                                <Text>{ item.name}</Text>
                            </VStack>
                        </GridItem>
                    ))
                }
            </Grid>
            {/* <DownArrow to={"Contact"} /> */}
        </Flex>
    )
}