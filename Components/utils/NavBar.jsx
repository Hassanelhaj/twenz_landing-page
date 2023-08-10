"use client";

import React, { useState } from "react";
import{HiHome, HiPhone} from 'react-icons/hi'
import { FiHome, FiMenu } from "react-icons/fi";
import { BsCCircleFill, BsFillCartFill, BsPersonCircle } from "react-icons/bs";
import logo from '../../public/imgs/zlap/logo2.jpg'

import {FaBlog, FaHome, FaSearch} from 'react-icons/fa'
// import { } from "react-icons/gi";
import {  HiCode } from "react-icons/hi";
import{BsFillPersonFill}from "react-icons/bs";
import { BsFillBagFill,BsInfoCircleFill} from "react-icons/bs";
import Link from "next/link";

import { FaSearchPlus } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import Image from "next/image";

// IoRestaurantSharp

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

              {/* <HiCode className="text-3xl" /> */}
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
                  href="/blog"
                  className=" flex justify-center items-center gap-1 link"
                >
                  <span>
                    <FaBlog className="text-xl" />
                  </span>
                  <span>تونزيات</span>
                </Link>
                <Link
                  href="/"
                  className=" flex justify-center items-center gap-1 link"
                >
                  <span>
                    <BsPersonCircle className=" text-xl" />
                  </span>
                  <span>عنا</span>
                </Link>
                {/*  */}
                <Link
                  href="/"
                  className=" flex justify-center items-center gap-1
           link"
                >
                  <span>
                    <HiPhone className="text-xl" />
                  </span>
                  <span>تواصل معنا</span>
                </Link>
              
               
                {/* <Link
                  href="/login"
                  className=" flex justify-center items-center gap-1 link px-3 py-2 rounded-lg bg-amber-800 text-white"
                >
                  <span>
                    <BiLogIn className="text-xl" />
                  </span>
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className=" flex justify-center items-center gap-1 link px-3 py-2 rounded-lg border   border-amber-800 text-amber-800"

                >
                  <span>
                    <BiSearch className="text-xl" />
                  </span>
                  <span>Register</span>
                </Link> */}
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
              {/* <HiCode className="text-3xl text-amber-800  "  /> */}
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
              href="/blog"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <FaBlog className="text-xl" />
              </span>
              <span>تونزيات</span>
            </Link>
            {/*  */}
          
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
           
            {/* <div className="ml-1 flex items-center gap-2">
              <Link
                href="/login"
                className=" flex justify-center items-center gap-1 px-3 py-2 bg-amber-800 rounded-lg text-white hover:opacity-70"
              >
                <span>
                  <BiLogIn className="text-xl" />
                </span>
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className=" flex justify-center items-center gap-1 text-amber-800 px-3 py-2 rounded-lg border border-amber-800 bg-white hover:opacity-70"
              >
                <span>
                  <BiLogIn className="text-xl" />
                </span>
                <span>Register</span>
              </Link>
            </div> */}
          </ul>
        </div>
      </nav>
    </main>
  );
};
// IoRestaurantSharp

export default NavBar;
