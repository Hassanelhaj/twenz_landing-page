import React from 'react'
import ContactPoter from './ContactPoter'
import ContactForm from './ContactForm'
import back from '../../public/background/bac.jpg'

const ContactCon = () => {
  return (
    <div className=' w-screen md:min-h-[88dvh] h-full poster  overflow-hidden grid grid-cols-1  mb-2 md:mb-0
    lg:grid-cols-2 gap-0'>
        <section className={` h-max lg:col-span-1 sm:h-[90dvh] poster 
         text-white md:min-h-[88dvh]`} >
            <ContactPoter/></section>
        <section className='lg:col-span-1 bg-purple-50 h-max sm:h-[90dvh]'>
          <ContactForm/>
        </section>

    </div>
  )
}

export default ContactCon