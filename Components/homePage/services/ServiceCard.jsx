import React from 'react'
import { FaMobile } from 'react-icons/fa'
const ServiceCard = ({data}) => {
  return (
    <div className='shadow-md w-36 h-24 flex flex-col gap-4 text-amber-800 justify-center 
    items-center bg-white rounded-lg border'>
        <section><span className='text-3xl'>{data.logo}</span></section>
        <section className='text-sm font-medium'>{data.title}</section>


    </div>
  )
}

export default ServiceCard