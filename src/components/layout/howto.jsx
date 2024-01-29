import React from 'react'
import how from "../../assets/donation.jpg"
import BUtton from '../BUtton'
import { Link } from 'react-router-dom';
import Supports from "../../assets/supports.jpg"
const howto = () => {
  return (
    <div className='flex lg:flex-row flex-col w-screen h-auto overflow-hidden gap-5'>
      <img src={Supports} alt="rahil foundation" className='xl:w-1/3 lg:h-auto h-96' />
      <div className='flex flex-col gap-3 p-10'>
        <h1 className='font-bold lg:text-6xl border-b-2 border-black pb-4'>How To Support?</h1>
        <div className='lg:grid lg:grid-flow-col  lg:grid-cols-2'>
          <div className='flex flex-col gap-5 p-5'>
            <p className='xl:text-xl'>Spotlight featured authors with a rotating selection, allowing visitors to discover new voices.
              Display live feeds or links to your social media profiles to encourage visitors to follow and share your content.</p>
            <div className='flex gap-5'>
              <Link to="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>                      </div>
          </div>
          <img src={how} alt="rahil foundation" className='hidden lg:flex' />
        </div>
      </div>
    </div>
  )
}

export default howto
