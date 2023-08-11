import Link from 'next/link';
import React from 'react'
// import { HiCode } from "react-icons/hi";
import logo from '../../public/imgs/zlap/logo2.jpg'
import Image from 'next/image';

const Footer = () => {
  return (
    
<footer className="text-white bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-2">
                {/* <HiCode className="text-3xl text-gray-400" /> */}
                <Image src={logo} className='w-6 h-6 rounded-full'/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap
                   text-gray-400">توينز</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-400 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a target='_blank' href="https://www.facebook.com/twinscafesudan
" className="hover:underline ">Facebook</a>
                      </li>
                      <li>
                          <a target='_blank' href="mailto:Aboisam1991@gmail.com" 
                          className="hover:underline">Emali</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-400 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p>تصميم و برمجة حسن الحاج</p>
     
    </div>
</footer>

  )
}

export default Footer