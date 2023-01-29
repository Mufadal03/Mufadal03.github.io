import { Box } from '@chakra-ui/react'
import React from 'react'
import Cursor from '../Components/Cursor'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import "../index.css"
import About from './About'
import Contact from './Contact'
import Github from './Github'
import Project from './Project'
import Skills from './Skills'
const Home = () => {
  return (
    <Box bgColor={'hsl(219,48%,8%)'} color="white" >
          <Navbar />
          <Hero />
      <About />
      <Skills />
      <Github />
      <Project />
      <Contact />
      </Box>
  )
}

export default Home