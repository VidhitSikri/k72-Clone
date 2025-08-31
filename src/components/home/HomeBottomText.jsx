import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-4  '>
      <Link className='text-[5.5vw] border-3 px-8 pt-2 leading-[6vw] border-white rounded-full uppercase'>Projects</Link>
      <Link className='text-[5.5vw] border-3 px-8 pt-2 leading-[6vw] border-white rounded-full uppercase'>Agence</Link> 
    </div>
  )
}

export default HomeBottomText
