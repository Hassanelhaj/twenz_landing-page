import React from 'react'


import BlogCard from '../blogPage/BlogCard';


const CardsList = ({data}) => {
 
  return (
    <div className='container mx-auto w-full flex flex-row justify-center items-stretch gap-3 flex-wrap p-4'>
      {data.map((project)=>{return(<BlogCard key ={project.id} data ={project}/>)})}
     
       
    </div>
  )
}

export default CardsList