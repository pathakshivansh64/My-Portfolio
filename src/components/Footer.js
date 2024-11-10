import React from 'react'
import Layouts from './Layouts'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layouts className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear}&copy; All Rights Reserved.</span>
        <div className='flex item-center lg:py-2'>
        Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
        by&nbsp;<span href="" target={"_blank"} className='underline underline-offset-2'>Shivansh Pathak</span>
        </div>
        
        <Link href="https://www.linkedin.com/in/shivansh-pathak-610969233" target={"_blank"}  className='underline underline-offset-2'>Say Hello</Link>
      </Layouts>
    </div>
  )
}

export default Footer
