import React from 'react'
import { Link } from 'react-router-dom'
import "./cyber.css"
    const cyber = () => {
    return (
       <div className='p-5 md:p-10 lg:p-20 xl:p-40 w-full md:w-screen lg:w-screen xl:w-screen'>
    <div className='bg-blue-300  lg:h-96 flex flex-col rounded-3xl p-2 items-center'>
        <h1 className='text-2xl lg:ext-4xl font-semibold mt-10'>Filing a Complaint on National Cyber Crime Reporting Portal</h1>
        <div className='flex font-semibold flex-col gap-5 lg:p-10'>
            <p>This portal is an initiative of the Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with a special focus on cyber crimes against women and children. Complaints reported on this portal are dealt with by law enforcement agencies/police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing a complaint for prompt action.</p>
            <p>Please contact the local police in case of an emergency or for reporting crimes other than cyber crimes. The national police helpline number is 112. The national women helpline number is 181, and the Cyber Crime Helpline is 1930.</p>
            <div className='flex flex-col w-full justify-between md:flex-row gap-5'>
                <h1 className='bg-orange-600 text-white rounded-xl p-2 font-semibold '>
                    <Link to="/CyberCrime" className='wave-animation hover:bg-orange-700 active:bg-orange-800 focus:outline-none focus:ring focus:border-orange-300 bg-orange-600 text-white rounded-xl p-2 font-semibold transition-all duration-300'>
                        Learn about cyber crime
                    </Link>
                </h1>
                <h1 className='bg-orange-600 text-white rounded-xl p-2 font-semibold '>
                    <Link to="/CyberCrime" className='wave-animation hover:bg-orange-700 active:bg-orange-800 focus:outline-none focus:ring focus:border-orange-300 bg-orange-600 text-white rounded-xl p-2 font-semibold transition-all duration-300'>
                        File your complaint
                    </Link>
                </h1>
            </div>
        </div>
    </div>
</div>

    )
}

export default cyber
