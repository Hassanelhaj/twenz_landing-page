import React from 'react'
import img from '../../../public/imgs/zlap/logo2.png'
import Image from 'next/image'

const ImgSection = () => {
  return (
    <div>
        <Image priority src={img} alt = 'hero-logo' className='w-64  h-64 overflow-hidden rounded-full bg-transparent'/>
    </div>
  )
}

export default ImgSection