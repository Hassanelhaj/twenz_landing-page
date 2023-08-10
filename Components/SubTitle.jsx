import Link from 'next/link'
import React from 'react'

const SubTitle = ({title}) => {
  return (
    <div className=' container mx-auto overflow-hidden  mt-4 flex justify-center items-center px-4 lg:px-6'>
      <h3 className=' text-2xl 
      font-bold capitalize  text-amber-800 '>
          {title}
      </h3>
    
    </div>
  )
}

export default SubTitle