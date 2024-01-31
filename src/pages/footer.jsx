import React from 'react'
import Logo from "../assets/logo.png"
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css"
import bgimg from "../assets/download.jpeg"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='h-auto w-screen overflow-x-hidden  flex  flex-col p-5 lg:gap-10 bg-orange-600'>
            <div className='h-60 w-screen flex flex-col gap-10 justify-center items-center'>
                <img src={Logo} alt="rahil foundation" className=' h-32 items-center' />
                <h1>
                    <Link to="#" className='font-bold lg:text-3xl text-lg hover:underline text-orange-600 bg-white rounded-2xl p-2'>MAKE A DONATION</Link></h1>
            </div>
<div className='flex lg:flex-row flex-col w-screen justify-between gap-10 p-10 lg:p-24'>
                <div>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>ABOUT</Link>
                </h1>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>THE ORGANIZATION</Link>
                </h1>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>WHAT WE DO</Link>
                </h1>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>TAKE PART</Link>
                </h1>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>BLOG</Link>
                </h1>
                    <h1>
                        <Link to="/about" className='lg:text-3xl text-lg hover:underline font-bold text-white'>CONTACT</Link>
                </h1>

                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='font-bold text-white'>SUBSCRIBE TO THE NEWSLETTER</h1>
                    <input placeholder='Email' type='email' className='bg-orange-600 text-lg font-bold border-b-2 ' />


                    <button className='font-bold text-white p-1 text-lg  border hover:bg-white hover:text-orange-600 w-32 rounded-xl'>sign up</button>
                </div>
                <div className='text-white font-bold gap-5  flex flex-col '>
                    <div className='flex flex-col gap-3'>
                         <h1 className='lg:text-3xl text-lg hover:underline font-bold text-start'>
                        ADDRESS
                    </h1>
                    <h1 className='text-lg'>
                        1st floor, 783/25 W-1 <br />
                        Saket Nagar, Kanpur-208014
                    </h1>
                   </div>
                    <div className='flex flex-col gap-3'>
                         <h1 className='lg:text-3xl text-lg hover:underline font-bold text-start'>
                        CONTACT
                    </h1>
                    <h1 className=''>
                      +91 9935201079<br />
                      RAHILFOUNDATIONKANPUR@GMAIL.COM

                    </h1>
                   </div>
                </div>

            </div>
            <div className=' w-screen flex flex-col  text-white gap-3 justify-center items-center'>

            <div className=' w-screen flex lg:text-3xl text-lg text-white gap-10 justify-center items-center'>
                <Link   to="https://www.instagram.com/rahil_foundation/ ">

                <RiInstagramFill />
                </Link>
                <Link    to="https://www.facebook.com/rahilfoundation">

                <FaFacebook />
                </Link>
                <Link    to="https://www.facebook.com/rahilfoundation">

               <FaLinkedin />
                </Link>
                <Link       to="https://www.youtube.com/@RahilFoundation">

               <FaYoutube/>
                </Link>


                </div>
                <h1>
                    <Link className='text-lg hover:underline'>privacy & policies</Link>
                </h1>
            </div>

        </div>
    )
}

export default Footer
