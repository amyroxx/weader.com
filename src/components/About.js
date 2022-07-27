import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity:1}}
    >
        <Navbar/>
    </motion.div>
  )
}

export default About