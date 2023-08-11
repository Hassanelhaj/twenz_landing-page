"use client";

import React, { useState } from "react";
import { HiHome, HiPhone } from "react-icons/hi";
import {FiMenu } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../public/imgs/zlap/logo2.jpg";

import { FaBlog } from "react-icons/fa";

import {  BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

import Image from "next/image";

const NavBar = () => {
  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="px-6 text-amber-900 bg-white ">
      <nav className="  max-w-screen-xl ">
        {/* mobile nav */}
        <div className="container mx-auto  lg:hidden flex justify-between items-center flex-wrap px-2 pl-3 py-4">
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer"
          >
            <span>
              <Image src={logo} className="w-8 h-8 rounded-full" />

           
            </span>
            <span className="text-2xl -mt-1 font-bold ">توينز</span>
          </Link>
          <span onClick={handleToggle}>{<FiMenu className="text-3xl" />}</span>

          {toggle && (
            <div className="w-screen text-center mt-8 ">
              <ul className="flex flex-col items-center gap-2">
                <Link
                  href="/"
                  className=" flex justify-center items-center gap-1 hover:opacity-70"
                >
                  <span>
                    <HiHome className="text-2xl " />
                  </span>
                  <span>الرئيسية </span>
                </Link>
                <Link
                  href="/about"
                  className=" flex justify-center items-center gap-1 link"
                >
                  <span>
                    <BsInfoCircleFill className=" text-xl" />
                  </span>
                  <span>عنا</span>
                </Link>
                {/*  */}
                <Link
                  href="/contact"
                  className=" flex justify-center items-center gap-1
           link"
                >
                  <span>
                    <HiPhone className="text-xl" />
                  </span>
                  <span>تواصل معنا</span>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* desktop nav */}

        <div
          className=" hidden lg:flex  px-3 
     flex-row  py-4 justify-start items-center  lg:gap-80 xl:gap-96"
        >
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer text-amber-800"
          >
            <span>
              <Image src={logo} className="w-8 h-8 rounded-full" />
       
            </span>
            <span className="text-2xl -mt-1 font-bold ">توينز</span>
          </Link>
          <ul className="flex justify-center items-center  lg:gap-3 xl:gap-6 lg:ml-6 xl:mr-10">
            <Link
              href="/"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <HiHome className="text-2xl " />
              </span>
              <span>الرئيسية</span>
            </Link>
            <Link
              href="/about"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <BsInfoCircleFill className="text-xl" />
              </span>
              <span>عنا</span>
            </Link>
            <Link
              href="/contact"
              className=" flex justify-center items-center gap-1 hover:opacity-70 text-amber-800"
            >
              <span>
                <HiPhone className="text-xl  " />
              </span>
              <span>تواصل معنا</span>
            </Link>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
