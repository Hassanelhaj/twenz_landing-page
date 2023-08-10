import React from 'react'

import BlogCard from './BlogCard';

const CardsList = ({data}) => {
  
  return (
    <div className=' container mx-auto mt-4 lg:mt-2 flex flex-row justify-center items-center gap-3 flex-wrap p-4'>
      {data.map((car,ind)=>{return(<BlogCard key ={ind} data ={car}/>)})}
     
       
    </div>
  )
}

export default CardsList