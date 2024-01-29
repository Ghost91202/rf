import React from 'react'
import AboutImg from "../../assets/aboutimg.jpg"


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
           
          </div>

          <div className="grid grid-row gap-4 mt-8">
            <img className="w-full  rounded-xl" src={AboutImg} alt="rahil foundation" />
            {/* <img className="mt-4 ml-5      w-96 h-96 lg:mt-1 rounded-lg" src={Aboutimg2} alt="office content 2" /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
