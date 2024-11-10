import React from 'react'

const Layouts = ({children,className}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12  sm:p-8 dark:bg-dark ${className}`}>
      {children}
    </div>
  )
}

export default Layouts