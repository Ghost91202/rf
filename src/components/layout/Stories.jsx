import React from 'react'
import Button from "../BUtton"
import img from "../../assets/str3.jpg"
import { IoIosPlayCircle } from "react-icons/io";
import bgimg from "../../assets/aboutimg1.jpg"
const Stories = () => {
  return (
    <div className='lg:h-auto w-screen overflow-x-hidden'>
    <div className='grid grid-flow-col  grid-cols-1 lg:grid-cols-2'>

        <div className='bg-orange-500 h-auto lg:h-auto flex p-10 items-center justify-center'>
            <img src={img} alt="rahil foundation" className='ml-0 sm:ml-44 ' />
        </div>

        <div className='p-10 md:p-20 flex flex-col justify-center gap-5'>

            <h1 className='text-xl lg:border-transparent border-b-2 border-black lg:text-6xl text-balance font-bold'>Our Stories</h1>
            <p className='lg:w-auto w-96 '>Spotlight featured authors with a rotating selection, allowing visitors to discover new voices. Create curated collections or reading lists based on themes, genres, or special events.</p>
            <div className='flex gap-5 items-center'>
                <IoIosPlayCircle className='text-3xl lg:text-7xl' />
                <Button url="/blog" title="Watch Video" />
            </div>
        </div>

    </div>
</div>

  )
}

export default Stories
