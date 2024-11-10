import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details=({type,time,place,info})=>{
    const ref=useRef(null);
    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </div>
    </li>
    )
}

const Education = () => {
    const ref=useRef(null);
    const {scrollYProgess}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div >
        <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl sm:text-4xl md:mb-16'>
            Education 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div style={{scaleY:scrollYProgess}} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light'/>


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details type={" Bachelor Of Techonology In Computer Science and Engineering"} place={"Gurukul Kangri University,Haridwar"} time="2021-2025" info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence. "}/>

            
            </ul>
        </div>
      
    </div>
  )
}

export default Education
