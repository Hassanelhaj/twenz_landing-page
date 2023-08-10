"use client"
import React, { useEffect, useState } from 'react'
import ContactCon from '../../../Components/contactPage/ContactCon'

const page = () => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
  return (
    <div className=' overflow-hidden '>
        <ContactCon/>
    </div>
  )
}

export default page