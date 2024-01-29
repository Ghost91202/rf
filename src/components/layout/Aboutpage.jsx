import React from 'react'
import Navbar from "../../pages/navbar"
import ABoutbg from "../../assets/cl.png"
import Footer from "../../pages/footer"
const Aboutpage = () => {
  return (
    <div>
      <div>

        {/* Your page content */}
      </div>
      <Navbar />

      <div className="w-screen  flex lg:flex-row flex-col p-20">

        <div className="relative flex lg:h-screen  justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl  ">



          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
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
                Rahil Foundation is a Non Governmental Organization. It has
                been Established from November 2023 in Kanpur, Uttar
                Pradesh and The Aim is to make People Aware about Cyber
                Literacy so Kindly Join Us so that You can also be Aware of
                Cyber Scam.
              </p>
              <br />
               <br />
              
              <p className="max-w-lg mb-6 font-sans text-xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
                Whose Chain We Have Created <span className='text-orange-500 '>
                 CYBER CIVILIZED
                INDIA
                </span>

              </p>

              <div className='text-justify'>

                <p className="max-w-lg mb-6 font-sans text-xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none ">
                  Rahil Foundation
                </p>
                Conducts Workshops, Training sessions,
                and Awareness Programs to Increase Basic Computer Skills,
                Teach Internet Safety, and In still Responsible Online
                Behaviour. Through its Initiatives, the Foundation Aims to
                bridge the Digital Divide and ensure that people, Especially in
                Underserved Communities, have the tools to protect
                themselves in the Digital Age.
              </div>
              <br />

            </div>

          </div>
        </div>
          <div className="lg:w-1/2">
    <img
      src={ABoutbg}
      className="w-full h-auto border-none"
      alt="rahil foundation"
    />
  </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutpage
