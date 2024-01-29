 import React from 'react'
import Bgimg from "../assets/Blue Minimalist Creative Business Plan Presentation (169).jpg"
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbArrowWaveRightUp } from "react-icons/tb";
import aboutbg from "../assets/aboutimg1.jpg"
import Strip1 from "../assets/strip1.png"
import Strip2 from "../assets/strip2.png"
const service = () => {
    return (
   <div className='w-full overflow-hidden h-auto lg:h-auto flex flex-col sm:flex-row'>

    <div className='w-full sm:w-3/4 h-auto   lg:h-auto'>
        <div className="p-10 md:p-20 lg:p-32 font-semibold text-balance">
            <h2 className="mb-4 text-2xl lg:text-6xl xl:pt-20 tracking-tight font-bold text-black">Welcome to <span className='text-orange-600'>Rahil Foundation</span></h2>
            <p className="mb-4 xl:w-3/4">Where we embark on a transformative journey towards cyber literacy. At Rahil, we recognize the pivotal role of digital understanding in today's interconnected world. Our mission is to empower individuals with the knowledge and skills to navigate the digital landscape safely and responsibly.</p>

            <br />
            <p className='xl:w-3/4'>
                Join us in fostering a cyber-literate society where knowledge is the key to a secure and thriving digital future. Rahil Foundation is your partner in the journey towards a safer and more informed digital world.
            </p>
            <br />
            <Link to="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    </div>
    <div className='bg-orange-500 w-full sm:w-96 text-white p-10'>
        <div className='flex flex-col border-b-2 pb-4 pt-5 gap-3'>

            <BiSolidDonateHeart className='text-6xl text-start' />
            <h1 className='text-2xl font-semibold'>Donate Now</h1>
            <p>Your financial contribution can make a real difference. Every rupee you donate goes directly toward our projects.</p>
            <Link className='font-semibold flex items-center'>Get started <TbArrowWaveRightUp className='font-bold text-xl' /></Link>
        </div>
        <div className='flex flex-col border-b-2 pb-4 gap-4'>

            <FaHandshake className='text-6xl text-start' />
            <h1 className='text-2xl font-semibold'>Become a Volunteer</h1>
            <p>Your financial contribution can make a real difference. Every rupee you donate goes directly toward our projects.</p>
            <Link className='font-semibold flex items-center'>Get started <TbArrowWaveRightUp className='font-bold text-xl' /></Link>
        </div>
    </div>
</div>

    )
}

export default service
