import React from 'react'
import Layouts from '../components/Layouts'
import AnimatedText from '../components/AnimatedText'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import Project1 from '../../public/images/projects/Project1.png'
import Project2 from '../../public/images/projects/Project2.png'
import Project3 from '../../public/images/projects/Project3.png'
import Project4 from '../../public/images/projects/Project4.png'
import Transition from '@/components/Transition'


const Project=({type,title,summary,img,link,github})=>{
  return(
    <article className='w-full relative h-max   items-center justify-center rounded-3xl border-2 border-solid border-dark bg-light shadow-dark shadow-2xl p-10 dark:border-light dark:bg-dark dark:shadow-light xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
     <Link href={link} target={"_blank"} className='w-full  cursor-pointer overflow-hidden rounded-lg relative  '>
      <Image src={img} alt={title} className='w-full h-auto rounded-xl' priority sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw'/>
      </Link>

      <div className='w-full mt-5 flex flex-col items-start justify-between  '>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target={"_blank"} className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-lg lg:text-lg'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-8 dark:bg-light rounded-full'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark  border border-solid border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>Visit </Link>
        </div>
      </div>
    </article>
  )
}

const FeaturedProject=({type,title,summary,img,link,github})=>{
  return(
    <article className='w-full  flex items-center justify-center rounded-3xl   shadow-2xl border-2 border-solid border-dark bg-light shadow-dark p-12 dark:border-light dark:bg-dark dark:shadow-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <Link href={link} target={"_blank"} className='w-1/2  cursor-pointer overflow-hidden rounded-lg lg:w-full'>
      <Image src={img} alt={title} className='w-full h-full ' priority sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw'/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target={"_blank"} className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-8 dark:bg-light rounded-full'><GithubIcon/></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Shivansh | Projects Page</title>
        <meta name="description" content='any description'/>
      </Head>
      <Transition/>
      <main className='w-full mb-16 flex flex-col items-center justify-center '>
        <Layouts className='pt-16'>
            <AnimatedText text="Imagination Trumps knowledge" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:text-4xl'/>
      

        <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-x-4 sm:gap-x-0'>
          <div className='col-span-12'>
         
           <FeaturedProject title={"Job Application Portal"} link="https://jobapp-6va3.onrender.com/" summary={"Developed a full-stack job searching platform that allows users to search for job listings, apply for positions, and manage their job applications.  "} type={"Featured Project"} img={Project1} github={"https://github.com/pathakshivansh64/Jobapp"} />

          </div>
          <div className='col-span-6 sm:col-span-12 md:col-span-12 '>
          <Project title={"OnlineGasAgency"} link="https://pathakshivansh64.github.io/OnlineGasAgency/" summary={"The Online Gas Booking System is a web-based application developed using HTML, CSS, and JavaScript. It allows users to conveniently book gas cylinders online, making the process faster and more efficient for both customers and gas agencies. "} type={" Project"} img={Project2} github={"https://github.com/pathakshivansh64/OnlineGasAgency"} />
          </div>

          <div className='col-span-6 sm:col-span-12 md:col-span-12'>
          <Project title={"Text-Editor App"} link="https://pathakshivansh64.github.io/texteditor/" summary={"The React Text Editor is a web application built with React that provides users with a simple and intuitive platform for writing, editing, and formatting text. This application serves as a lightweight, responsive text editor ideal for note-taking, drafting documents."} type={" Project"} img={Project3} github={"https://github.com/pathakshivansh64/texteditor"} />
          </div>

          <div className='col-span-12'>
          <FeaturedProject title={"GoFood-Delivery App"} link="https://foodapp-frontend-lmmc.onrender.com" summary={"Developed a feature-rich food delivery MERN application that allows users to browse menus, add items to their cart, place orders, and view their order history. "} type={"Featured Project"} img={Project4} github={"https://github.com/pathakshivansh64/foodapp-frontend"} />


          </div>
          
 
        </div>
        </Layouts>
      </main>
    </>
  )
}

export default Projects
