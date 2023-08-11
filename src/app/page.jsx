"use client"

import React, { useEffect, useState } from 'react';

import Hero from '../../Components/homePage/hero/Hero';
import SubTitle from '../../Components/SubTitle';
import Services from '../../Components/homePage/services/Services';
import Products from '../../Components/homePage/products/Products';



const Home = () => {
 
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
 
  return (
    <div className='  overflow-hidden  bg-white 
   ' >
    <div className='w-screen overflow-hidden'>
    <main className='w-screen overflow-hidden flex flex-col  items-center flex-wrap gap-3 '>

      <section className='w-full overflow-hidden bg-slate-50  pt-16 pb-16'>
      <Hero/>
      <section className='w-full flex flex-col gab-3'>
        <SubTitle title={"قائمتنا"} />
        
        <Services/>
      </section>
      </section>
    
      <section className='w-full mt-4 flex-col gap-3 flex mb-1'>
      <SubTitle title={"زلابيتنا"} />
        <Products/>
      </section>
    </main>
    </div>
    </div>
  )
}

export default Home