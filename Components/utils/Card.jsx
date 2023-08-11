
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import{FcLike} from 'react-icons/fc'


const Card = ({data}) => {

  return (
    <Link href={`/products/${data.category}/${data.id}`} 
    className='w-56 bg-white rounded-lg 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative group
     p-1  pb-4 
    cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-2'>
      <section >
        <Image src={data} alt = 'food' className='w-64 h-64 md:w-56 md:h-56'/>
      </section>
        
    </Link>
  )
}

export default Card