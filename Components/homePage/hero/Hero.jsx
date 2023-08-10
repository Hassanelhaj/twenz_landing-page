import Image from "next/image";
import React from "react";
import TextSection from "./TextSection";
import ImgSection from "./ImgSection";


const Hero = () => {
  return (
    <main className=" overflow-hidden bg-slate-50
     flex flex-row-reverse justify-center items-center
     gap-x-36 lg:gap-x-80  gap-y-12  flex-wrap-reverse p-4 ">
      <section className="">
        <TextSection/>
      </section >
      <section className =''>
        <ImgSection/></section>


    </main>
    
   
  );
};

export default Hero;
