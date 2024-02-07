import React from 'react'
import Mimg from "../../assets/ourmission.png"
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Slider from "../../pages/slidingonscroll"

const misson = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col lg:mb-10 lg:h-auto p-5 lg:p-20 '>
                <div className=' lg:w-2/5'>
                    <Slider Name={                    <img src={Mimg} alt="foundation" className=' w-auto h-auto' />
}/>
                </div>

                <div className=' lg:w-3/5 w-full p-10 gap-5 flex flex-col'>
                    <div className=' gap-5 lg:gap-20 flex flex-col '>
                        <h1 className='lg:text-6xl text-2xl font-bold '>
                        <span className='text-orange-500'>OUR MISSION: </span>
                        TO CHANGE THE LIFE OF WHO HAVE NO HOPE
                    </h1>
                    <p className=' lg:text-lg'>
                        The Vision of Rahil Foundation is that We will Join hands with the
                        Government and Make Everyone aware of Cyber Literacy. That is
                        Why Rahil Foundation Conducts Seminars in Schools and Colleges.
                        Cyber Scam has become Very Fast in today's Artificial Generation.
                        Most of the Victims are Youth and Suicide Cases are also Increasing
                        Every Year, the Main Reason for which is Blackmailing. They threaten
                        to Steal our Data and make it Viral in Public. Rahil Foundation's
                    </p></div>
                   <Link className=' border border-orange-600 p-5 text-orange-600 hover:text-white hover:bg-orange-600 font-bold justify-center text-center'>Read More </Link>
                </div>
            </div>
        </div>
    )
}

export default misson
