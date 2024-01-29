import React from 'react'
import { Link } from 'react-router-dom'
const BUtton = ({ title, url}) => {
  return (
      <div className='w-screen overflow-hidden'>
       <Link to={url} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '>{title}</Link></div>
  )
}

export default BUtton
