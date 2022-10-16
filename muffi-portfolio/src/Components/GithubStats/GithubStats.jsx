import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const GithubStats = () => {
  return (
      <Flex>
          <Box w="80%" display={"flex"} flexDirection='column' gap="1rem" m="4rem auto"  >
              <Flex gap="1rem" direction={{base:"column",lg:"row"}} justifyContent="center">
                  <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Mufadal03&hide=smalltalk&theme=algolia&layout=compact" />
                 
                  <Image src="https://github-readme-stats.vercel.app/api?username=Mufadal03&show_icons=true&theme=algolia&count_private=true" />
              </Flex>
              <Flex  justifyContent={"center"}> <Image  src=" https://github-readme-stats.vercel.app/api/top-langs/?username=Mufadal03&hide=smalltalk&theme=algolia&layout=compact" /></Flex>
          </Box>
    </Flex>
  )
}

export default GithubStats