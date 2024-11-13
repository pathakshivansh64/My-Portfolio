import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'
import useThemeswitcher from './hooks/useThemeswitcher'

const CustomLink=({href,title,className=""})=>{
  const router=useRouter()
 
    return(
        <Link href={href}  className={`${className} relative group`}>
          {title}

          <span className= {`h-[2px] inline-block w-0 bg-dark absolute left-0 bottom-0 group-hover:w-full  transition-[width] ease duration-500 ${router.asPath===href?'w-full':'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink=({href,title,className="",toggle})=>{
  const router=useRouter()

  const handleClick=()=>{
    toggle();
   router.push(href);
  }
 
    return(
        <button onClick={handleClick}  className={`${className} relative group text-light dark:text-dark my-2`}>
          {title}

          <span className= {`h-[2px] inline-block w-0 bg-light absolute left-0 bottom-0 group-hover:w-full  transition-[width] ease duration-500 ${router.asPath===href?'w-full':'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {
  const [mode,setmode]=useThemeswitcher();

  const [isOpen,setIsOpen]=useState(false);

  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>

<button className=" flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>

<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>

<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>

<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>

</button>

       {
        isOpen ?
        <motion.div className='w-[70vw] items-center flex flex-col justify-between  fixed top-[20%] right-[37%] z-30  translate-x-1/3 translate-y-1/3 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        initial={{scale:0,opacity:0,x:"30%",y:"15%"}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.5}}
        >
        <nav className='flex items-center flex-col justify-center'>
             <CustomMobileLink href='/' title="Home" className='mx-4'  toggle={handleClick}/>
             <CustomMobileLink href='/about' title="About" className='mx-4' toggle={handleClick}/>
             <CustomMobileLink href='/projects' title="Projects" className='mx-4' toggle={handleClick}/>
         </nav>
         
         <nav className='flex items-center justify-center flex-wrap mt-2'>
             <motion.a href='http://www.twitter.com' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><TwitterIcon/></motion.a>
             <motion.a href='https://github.com/pathakshivansh64' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><GithubIcon/></motion.a>
             <motion.a href='https://www.linkedin.com/in/shivansh-pathak-610969233' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><LinkedInIcon/></motion.a>
             <button
             onClick={()=>setmode(mode==='light'?'dark':'light')}
             className={`ml-3 flex items-center w-6 justify-center rounded-full p-1 ${mode==='light'?'bg-dark text-light':'bg-light text-dark'}`}
             >
               
               {
                 mode==='dark'?
                 <SunIcon className={"fill-dark"}/>
                 :<MoonIcon className={"fill-dark"}/>
               }
             </button>
             
         </nav>
        </motion.div>
 

        :null
       }

       <div className='w-full items-center flex justify-between lg:hidden'>
       <nav >
            <CustomLink href='/' title="Home" className='mx-4'/>
            <CustomLink href='/about' title="About" className='mx-4'/>
            <CustomLink href='/projects' title="Projects" className='mx-4'/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href='http://www.twitter.com' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3'><TwitterIcon/></motion.a>
            <motion.a href='https://github.com/pathakshivansh64' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon/></motion.a>
            <motion.a href='https://www.linkedin.com/in/shivansh-pathak-610969233' target={"_blank"} whileHover={{y:-2}}  whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
            <button
            onClick={()=>setmode(mode==='light'?'dark':'light')}
            className={`ml-3 flex items-center w-6 justify-center rounded-full p-1 ${mode==='light'?'bg-dark text-light':'bg-light text-dark'}`}
            >
              
              {
                mode==='dark'?
                <SunIcon className={"fill-dark"}/>
                :<MoonIcon className={"fill-dark"}/>
              }
            </button>
            
        </nav>
       </div>

        <div className='absolute left-[50%] top-2 translate-x-[50%] sm:right-[10%] '>
            <Logo/>
        </div>
      
    </header>
  )
}

export default Navbar
