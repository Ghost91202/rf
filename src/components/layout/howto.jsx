import React from 'react'
import how from "../../assets/donation.jpg"
import BUtton from '../BUtton'
import Supports from "../../assets/supports.jpg"
const howto = () => {
  return (
      <div className='flex lg:flex-row flex-col w-screen h-auto overflow-hidden gap-5'>
        <img src={Supports} alt="" className='xl:w-1/3 lg:h-auto h-96'/>
          <div className='flex flex-col gap-3 p-10'>
              <h1 className='font-bold xl:text-3xl border-b-2 border-black pb-4'>How To Support?</h1>
              <div className='lg:grid lg:grid-flow-col  lg:grid-cols-2'>
                  <div className='flex flex-col gap-5 p-5'>
                      <p className='xl:text-xl'>Spotlight featured authors with a rotating selection, allowing visitors to discover new voices.
                          Display live feeds or links to your social media profiles to encourage visitors to follow and share your content.</p>
                      <div className='flex gap-5'>
                      <BUtton url="/about" title="Support"/>
                      </div>
                  </div>
               <img src={how} alt="" className='hidden lg:flex'/>
              </div>
        </div>
    </div>
  )
}

export default howto
