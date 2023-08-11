import Link from 'next/link'
import React from 'react'
import Writer from '../../Writer'

const TextSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 overflow-hidden'>
        <h1 className='text-lg font-bold capitalize'>
             ستهدينا الحياة في اخر انفق <span className='text-amber-800 text-2xl mr-1 font-extrabold'>
              {/* <Writer  /> */}
              زلابية
              </span>
        </h1>
        <p className='w-64'>
        ‏وإذا الهُمومُ على الكِتافِ تَشعبطت
هُزَّ الكُتوفَ وقُل لها: ماشة طوينزي  😄

زلابية بالشوكولاتة  حتبيض قلبك 😎 حتطلع من المحل وانت راضي عن كل الزعلوك ☺️✔️
        </p>
        <div className='capitalize flex items-center gap-2 mt-4'>
        <Link href='/contact' className='px-2 py-2  rounded-lg shadow-md  border border-amber-800 text-amber-800 bg-white'>
               اتواصل مع توينز
            </Link>
            <Link href='/about' className='px-2 py-2  rounded-lg shadow-md bg-amber-800 text-white'>
                اعرف قصة توينز
            </Link>
          
        </div>
    </div>
  )
}

export default TextSection