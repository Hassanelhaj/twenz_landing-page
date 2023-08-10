import React from 'react'
import CardsList from '../../utils/CardsList'
import zl1 from '../../../public/imgs/zlap/zl1.jpg';
import zl2 from '../../../public/imgs/zlap/zl2.jpg';
// import zl3 from '../../../public/imgs/zlap/zl3.jpg';
import zl3 from '../../../public/imgs/zlap/zl4.jpg';
import zl4 from '../../../public/imgs/zlap/zl4.jpg';

import zl5 from '../../../public/imgs/zlap/zl5.jpg';
import zl6 from '../../../public/imgs/zlap/zl6.jpg';
import zl7 from '../../../public/imgs/zlap/zl7.jpg';
import zl8 from '../../../public/imgs/zlap/zl8.jpg';
import zl9 from '../../../public/imgs/zlap/zl9.jpg';
import zl10 from '../../../public/imgs/zlap/zl10.jpg';
import Image from 'next/image';


const Products = () => {
    let data = [zl1,zl2,zl3,zl4,zl5,zl6,zl7,zl8,zl9,zl10,];
  return (
    <div className='flex justify-center items-center flex-wrap gab-2 mt-3'>
        {
            data.map((img,ind)=>{
                return <div key= {ind}><Image className='w-64 h-64 rounded-md' src={img} /></div>
            })
        }
    </div>
  )
}

export default Products