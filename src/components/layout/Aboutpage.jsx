import React from 'react'

import ABoutbg from "../../assets/success.webp"
import Footer from "../../pages/footer"
import { Link } from 'react-router-dom'
const Aboutpage = () => {
  return (
    <div>
      <div>

        {/* Your page content */}
      </div>


      <div className="w-screen lg:mb-10 grid grid-flow-col  grid-cols-1 lg:grid-cols-2 just  lg:p-20 p-10">

        <div className="relative flex lg:h-screen  justify-end w-auto mx-auto xl:pr-32   ">



          <div className="mb-16 lg:pr-5  lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 border-b-2 border-orange-500">
                  Rahil foundation
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-xl lg:text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About Us :-
                <br className="hidden md:block" />


              </h2>
              <p className="text-base text-gray-700 text-justify md:text-lg">
                Rahil Foundation is a Non-Governmental Organization which is working for Cyber Literacy and I assume we are probably the only one who is working for it
              </p>
              <br />
              <br />

              <p className=" max-w-lg mb-6 font-sans text-xl flex flex-col lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
                Our motto is <span className='text-orange-500 '>
                  Cyber Civilized India.
                </span>

              </p>

              <div className='text-justify'>

                <p className="max-w-lg mb-6 font-sans text-xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none ">
                  Rahil Foundation
                </p>
                Rahil Foundation was Establish on 23rd November 2023 in Kanpur, Uttar Pradesh. And if you are wondering what ‘Rahil’ means, then let me tell you what it is?

                <br />‘Rahil’ is an Urdu word, which means ‘The one who is guiding the way’ AKA ‘मार्गदर्शक’.

                It was suggested by our founder
                <br />
                <Link to="https://www.linkedin.com/in/nikhil-pandey-23aa76123/
" className='font-semibold' target='blank'>Mr. Nikhil Pandey.</Link>                           </div>
              <br />

            </div>

          </div>
        </div>
        <div className="w-auto h-auto hidden lg:flex justify-center items-center">
          <img
            src={ABoutbg}
            className="w-full h-auto  flex justify-center items-center border-none"
            alt="rahil foundation"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutpage
