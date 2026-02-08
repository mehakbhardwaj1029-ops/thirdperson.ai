import React from 'react'
import { motion } from 'framer-motion';
import './LandingPage.css';
const LandingPage = () => {
  return (
   <section className='hero'>
    <motion.h1
    initial={{
          y: -25,
          opacity: 0,
          filter: 'blur(6px)'
        }}
         animate={{
          y: 0,
          opacity: 1,
          filter: 'blur(0px)'
        }}
         transition={{
          duration: 3,
          ease: 'easeOut'
        }}
    >Third Person
    </motion.h1>
   <motion.p
  className="subtitle"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 1 }}
>
  Your AI companion
</motion.p>

    <div className='cta'>
        
    </div>
   </section>
  )
}

export default LandingPage