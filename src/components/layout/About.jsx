import React from 'react'
import AboutImg from "../../assets/aboutimg.jpg"
import Aboutimg1 from "../../assets/unnamed.png"
import Aboutimg2 from "../../assets/images.png"

const About = () => {
  return (
    <div>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Rahil Foundation</h2>
            <p className="mb-4"> where we embark on a transformative journey towards cyber literacy. At Rahil, we recognize the pivotal role of digital understanding in today's interconnected world. Our mission is to empower individuals with the knowledge and skills to navigate the digital landscape safely and responsibly.
            </p>

            <br/>
            <p>
            Join us in fostering a cyber-literate society where knowledge is the key to a secure and thriving digital future. Rahil Foundation is your partner in the journey towards a safer and more informed digital world.
            </p>
            <br/>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
          </div>

          <div className="grid grid-row gap-4 mt-8">
            <img className="w-full  rounded-xl" src={AboutImg} alt="office content 1" />
            {/* <img className="mt-4 ml-5      w-96 h-96 lg:mt-1 rounded-lg" src={Aboutimg2} alt="office content 2" /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
