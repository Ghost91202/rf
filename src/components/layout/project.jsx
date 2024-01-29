import React from 'react'
import { Link } from 'react-router-dom'
import project1 from "../../assets/pro.png"
const project = () => {
  return (
      <div>
          <div className='grid lg:h-screen lg:mb-10 grid-flow-cols grid-cols-1  lg:grid-cols-2'>

            <div className='bg-orange-500 lg:p-20 p-10 flex flex-col gap-10  text-white '>
                  <h1 className='lg:text-6xl text-2xl font-bold '>PROJECTS & ACTIVITIES</h1>
                  <p className='lg:text-lg font-semibold text-justify lg:text-balance'>
                      Rahil Foundation does Activities by going to Schools and Colleges of
the City and Conducting Seminars so that People can Know what
Cyber Literacy is and How to Save it. What should you Upload and
what should you not Upload in your Social Media Platform & which
types of Links should be Clicked and which should not be Clicked. At
the 1930 Helpline Run by the National Cyber Crime Reporting Portal,
there were 7,00,000 Complaints of Online Fraud in April 2023 alone,
nearly 1,00,000 of them from just Uttar Pradesh (see Top 10 States
With Most Complaints). That is 23,000 Crimes a day and nearly 1,000
crimes an hour.
                  </p>
                  <Link className='border border-white p-3 text-center lg:text-lg font-bold hover:bg-white  hover:text-orange-500'> Read more </Link>
        </div>
         <div className=' justify-center  items-center lg:flex hidden'>
                <img src={project1} alt="foundation" className='lg:w-3/4 rounded-2xl'/>
              </div>
          </div>
    </div>
  )
}

export default project
