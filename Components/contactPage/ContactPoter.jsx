import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail } from 'react-icons/fa'
import { MdEmail, MdReportGmailerrorred } from 'react-icons/md'

const ContactPoter = () => {
  return (
    <main className={`flex flex-col justify-center items-center gap-2 p-4 pt-8 capitalize h-full`}>

        <section className='flex flex-col   text-lg gap-2 p-2 lg:p-12 pb-0'>
        <h2 className='text-xl w-64 font-extrabold'>عايز تصلح مزاجك ؟</h2> 
        

        <p className='font-semibold w-64'>
            حلك قعدة في توينز , شاي مقنن , زلابية بالصوص اتواصلوا معانا عبر 

        </p>
        <section className='flex items-center gap-2 font-medium  mt-2 '>
      
           <a target='_blank'  href='mailto:Aboisam1991@gmail.com' className='text-3xl cursor-pointer hover:opacity-80'><MdEmail/></a>
           <a target='_blank'  href='https://www.facebook.com/twinscafesudan' className='text-3xl cursor-pointer hover:opacity-80'><FaFacebook/></a>
          
        </section>

        </section>
       
      
    </main>
  )
}

export default ContactPoter