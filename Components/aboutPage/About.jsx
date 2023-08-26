import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const About = ({data}) => {
  return (
    <div className='flex items-center justify-center overflow-hidden 
    arabic p-6 gap-x-16 gap-y-6 flex-wrap-reverse'>
        <section className=' flex flex-col justify-center items-center gap-3 w-[270px]'>
          <p className='leading-8'>
          {data.text}
          </p>
        <section className='hidden  justify-center items-center gap-2 font-medium px-6 '>
           <span className='text-3xl cursor-pointer hover:opacity-80'><MdEmail/></span>
           <span className='text-3xl cursor-pointer hover:opacity-80'><FaFacebook/></span>
           <span className='text-3xl cursor-pointer hover:opacity-80'><FaLinkedin/></span>
        
            
        </section>
        </section>
        <section>
          <Image priority src={data.img} 
          className='w-[270px] rounded-full object-cover overflow-hidden  h-[270px]' />
        </section>

    </div>
  )
}

export default About