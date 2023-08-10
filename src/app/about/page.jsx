"use client"
import React, { useEffect, useState } from 'react'
import About from '../../../Components/aboutPage/About'
import { aboutData } from '../../../aboutData'

const page = () => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
  return (

    <div className='min-h-[89dvh] flex items-center justify-center'><About data ={aboutData}/></div>
  )
}

export default page