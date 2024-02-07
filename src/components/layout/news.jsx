import React from 'react'
import { GoArrowDown } from "react-icons/go";
import newsimg from "../../assets/news1.jpg"
import { Link } from "react-router-dom"
import News2img from "../../assets/news3.jpg"
import Slider from "../../pages/slidingonscroll"
const news = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 grid--cols-1 h-auto '>
                <div className='flex flex-col p-10'>
                    <div className='flex flex-col gap-10 p-10 '>

                        <Link to="./blog">
                            <Slider Name={<img src={newsimg} alt='rahil foundation' className='hover:' />} />
                        </Link>




                        <div className=''>
                            <Link to="./blog">
                                <Slider Name={<h1 className='font-bold text-xl hover:underline hover:text-orange-500'>PHISHING AWARENESS</h1>} />
                            </Link>


                            <p>Rahil Foundation is at the Frontline of Promoting Cyber Literacy, with a Particular Focus on raising Awareness about Phishing </p>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col text-center w-full items-center justify-center'>
                    <h1 className=' text-xl lg:text-2xl font-bold text-orange-600'>GET UPDATED TODAY</h1>
                    <GoArrowDown className='text-9xl text-orange-600 font-serif flex justify-center' />
                    <div className='lg:text-6xl text-3xl font-bold'>
                        <h1 className='bg-orange-600 text-white'>LEARN</h1>
                        <h1>THE NEWS OF</h1>
                        <h1>OF CYBER SCAMS</h1>
                    </div>
                    <GoArrowDown className='text-9xl text-orange-600 font-serif flex justify-center' />
                    <Link to="/blog">
                        <h1 className='text-xl lg:text-2xl font-semibold lg:font-bold text-white bg-orange-600 p-2 rounded-2xl'>Read all the News</h1></Link>

                </div>
                <div className='flex flex-col p-10'>
                    <div className='flex flex-col gap-10 p-10 '>

                        <Link to="./blog">
                            <Slider Name2={<img src={News2img} alt='rahil foundation' className='' />} />
                        </Link>


                        <div className=''>
                            <h1 className='flex gap-5'>
                                <span></span>
                            </h1>

                            <Link to="./blog">
                                <Slider Name2={<h1 className='font-bold text-xl hover:underline hover:text-orange-500'>Social Media Safety</h1>} />
                            </Link>

                            <p>As Our Lives Increasingly Intertwine with the Digital Nation, Rahil Foundation Stands at the Frontline of Promoting Responsible Online Engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default news
