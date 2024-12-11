import Layouts from '@/components/Layouts'
import Head from 'next/head'
import Image from 'next/image'
import profile from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightbulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Transition from '@/components/Transition'




export default function Home() {
  return (
    <>
      <Head>
        
        <title>My-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <Transition/>
       <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
       <Layouts className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className='w-[39%] md:w-full'>
            <Image src={profile}  alt='profile' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw' />
          </div>
          <div className='w-[61%] flex flex-col items-center self-center lg:w-full lg:text-center'>
            
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-7xl !text-left xl:!text-5xl lg:!text-center lg:text-7xl md:!text-5xl sm:text-3xl'/>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'> As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
            <Link href="/ShivanshPathakResume (2).pdf" target={'_blank'} className='flex item-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>Resume<LinkArrow className={`w-6 ml-1`} /></Link>
            <a href="mailto:shivanshpathak64@gmail.com" className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light '>Contact</a>
          </div>
          </div>
         
        </div>
       </Layouts>
       <div>
       <HireMe/>
       </div>
       <div className='absolute right-8 top-[68%] inline-block w-[12%]'>
        <Image src={lightbulb} alt='bulb' className='w-full h-auto md:hidden'/>
       </div>
       </main>
    </>
  )
}
