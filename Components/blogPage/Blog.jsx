import React from 'react'
import CardsList from '../utils/CardsList'
import { articles } from '../../Data'
import SubTitle from '../SubTitle'

const BlogCon = () => {
  return (
    <div className='p-4 min-h-full mb-4 flex flex-col gap-3'>
      <SubTitle title ={'Articles'}/>
      <CardsList data={articles} />
      </div>
  )
}

export default BlogCon