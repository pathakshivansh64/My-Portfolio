import AnimatedText from '@/components/AnimatedText'
import Layouts from '@/components/Layouts'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilepic from '../../public/images/profile/profile.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/Transition'

const AnimatedNumbers=({value})=>{
    const ref=useRef(null);

    const motionvalue=useMotionValue(0);
    const springvalue=useSpring(motionvalue,{duration:2000})
    const isInview=useInView(ref,{once:true}) 

    useEffect(()=>{
        if(isInview){
            motionvalue.set(value);
        }
    },[isInview,value,motionvalue])

    useEffect(()=>{
        springvalue.on("change",(latest)=>{
           if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
           }
        })
    },[springvalue,value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
     <Head>
        <title>Shivansh | About Page</title>
        <meta name='description' content='any description'/>
    </Head>
    <Transition/> 
    <main className=' flex w-full flex-col items-center justify-center dark:text-light'>
        <Layouts className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-5xl  xs:!text-3xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light/75 '>Biography</h2>
              <p className='my-4 font-medium'>
            Hi, I&#39;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
            new and innovative ways to bring my clients visions to life.
            </p>

            <p className='my-4 font-medium'>
            I believe that design is about more than just making things look pretty - it&#39;s about solving problems and 
            creating intuitive, enjoyable experiences for users. 
            </p>

            <p className='my-4 font-medium'>
            Whether I&#39;m working on a website, mobile app, or 
            other digital product, I bring my commitment to design excellence and user-centered thinking to 
            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project. 
            </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 shadow-black dark:shadow-light dark:border-light  shadow-xl xl:col-span-4 md:order-1 md:col-span-8'>
               <Image src={profilepic} alt='profilepic' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw' />
            </div>

           <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '><AnimatedNumbers value={10}/>+</span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs-text-sm'>Projects Completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '><AnimatedNumbers value={1}/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm'>Years of experience</h2>
            </div>

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={10}/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs-text-sm'>satisfied clients</h2>
            </div>
           </div>

        </div>

        <Skills/>
        <Experience/>
        <Education/>
        </Layouts>
    </main>
    </>
  )
}

export default about
