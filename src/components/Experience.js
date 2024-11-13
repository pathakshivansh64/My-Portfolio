import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({position,comapny,companyLink,time,work})=>{
    const ref=useRef(null);
    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:w-[65%]'>
        <LiIcon reference={ref} />
        <div>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target={"_blank"} className='text-primary capitalize dark:text-primaryDark'>@{comapny} </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} 
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </div>
    </li>
    )
}

const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgess}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-32'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>
            Experience 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>

        <motion.div style={{scaleY:scrollYProgess}} className='absolute left-9 top-1  w-[4px] h-full bg-dark origin-top dark:bg-light' />


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
                <Details position="Full Stack Intern" comapny="Unified Mentor" time="Sept,2024-Present" work={"Collaborated with cross-functional teams to design, develop & implement responsive web applications using modern web technologies. Built and maintained scalable backend systems using [Technologies like Node.js, Express, Python, etc.],user-friendly front-end interfaces utilizing [HTML, CSS, JavaScript, React.js etc.] & ensuring mobile responsiveness ensuring seamless integration with databases such as [MongoDB, MySQL, etc.]. Worked on developing Online Gas Agency System, allowing users to book gas barrels & make payments online."} companyLink={"https://www.unifiedmentor.com/"}/>

              
            </ul>
        </div>
      
    </div>
  )
}

export default Experience
