import { Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
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
        name: "EXPRESS",
        img:"https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
    }
    // {
    //     id:,
    //     name: "",
    //     img:""
    // }
]

export const Tools = () => {
     useEffect(() => {
     Aos.init({duration:2000})   
    },[])
    return (
        <Flex pos={"relative"} id="Skill" minH="100vh"  direction={"column"} justifyContent={"center"}alignItems="center" >
            <Heading w={{base:"90%",lg:"80%"}} m=" 5px auto" textAlign={"left"} size={"xl"}>Tools I Use</Heading>
            <Grid data-aos="fade-left" gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(4,1fr)",lg:"repeat(6,1fr)"}} gridRowGap={{base:"0.5rem",md:"1rem",lg:"2rem"}} w={{base:"90%",lg:"80%"}} m="25px auto" >
                {
                    skills.map((item) => (
                        <GridItem >
                            <VStack mb="2rem" >
                                <Image h={{base:"100px",md:"120px",lg:"150px"}} src={item.img} />
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