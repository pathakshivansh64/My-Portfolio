import React from 'react'
import {delay, motion, stagger} from 'framer-motion'

const quote={
    initial:{
      opacity:1
    },
    animate:{
      opacity:1,
      transition:{
        delay:0.2,
       staggerChildren:0.5
       
      }
    }
  }

  const singleword={
    initial:{
      opacity:0,
      y:50
    },
    animate:{ 
      opacity:1,
      y:0,
      transition:{
        delay:0.5,
      }
    }
  }
  

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 '>
      <motion.h1    className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
      variants={quote} initial="initial" animate="animate"
      >
        {
            text.split(" ").map((word,index)=>
                <motion.span key={word+'-'+index} className='inline-block' 
                variants={singleword}
               
                > {word}&nbsp;</motion.span>
            )
        }
      </motion.h1>
    </div>
  ) 
}

export default AnimatedText
