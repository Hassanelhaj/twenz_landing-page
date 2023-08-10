import React from 'react'
import ServiceCard from './ServiceCard'
import { serviceList } from '../../../Data'

const Services = () => {
  return (
    <div className='flex justify-center items-center gap-3 flex-wrap mt-4'>
        {
            serviceList.map((service,ind)=>{
                return <ServiceCard key ={ind} data ={service}/>
            })
        }
        
        </div>
  )
}

export default Services