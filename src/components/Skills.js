import React from 'react'
import {motion} from 'framer-motion'

const Skill=({name,x,y})=>{
   return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold '
    whileHover={{scale:1.1}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y,transition:{duration:1.5}}}
    
    viewport={{once:true}}
    >
   {name}
    </motion.div>
   )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 text-center w-full mb-10 md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[60vh] sm:h-[35vh] xs:h-[25vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
         
         <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:p-2 xs:text-xs'
         whileHover={{scale:1.1}}
         
         
         >
        Web
         </motion.div>

         <Skill name="HTML" x="-5vw" y="-10vw"/>
         <Skill name="CSS" x="-12vw" y="8vw"/>
         <Skill name="Javascript" x="19vw" y="2vw"/>
         <Skill name="Reactjs" x="13vw" y="12vw"/>
         <Skill name="Nextjs" x="14vw" y="-12vw"/>
         <Skill name="Firebase" x="-25vw" y="-2vw"/>
         <Skill name="Nodejs" x="-22vw" y="-13vw"/>
         <Skill name="MongoDB" x="-36vw" y="8vw"/>
         <Skill name="C++" x="11vw" y="-4vw"/>
         <Skill name="Expressjs" x="38vw" y="-4vw"/>
         <Skill name="Python" x="-11vw" y="20vw"/>
         <Skill name="Docker" x="25vw" y="20vw"/>
         <Skill name="Git" x="-2vw" y="-21vw"/>

      </div>
    </>
  )
}

export default Skills
