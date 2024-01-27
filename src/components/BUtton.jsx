import React from 'react'
import { Link } from 'react-router-dom'
const BUtton = ({ title, url}) => {
  return (
      <div className='w-screen overflow-hidden'>
       <Link to={url} className='bg-orange-500 font-bold text-lg text-center text-white xl:w-32 p-2 '>{title}</Link></div>
  )
}

export default BUtton
