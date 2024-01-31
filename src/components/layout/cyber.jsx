import React from 'react'
import { Link } from 'react-router-dom'

const cyber = () => {
    return (
        <div className='p-20'>
            <div className=' bg-blue-300 h-96 flex flex-col  rounded-3xl p-2 items-center'>
                <h1 className='text-4xl font-semibold'>Filing a Complaint on National Cyber Crime Reporting Portal</h1>
                <div className='flex flex-col gap-5 lg:p-10'>
                    <p>This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.</p>
                    <p>Please contact local police in case of an emergency or for reporting crimes other than cyber crimes. National police helpline number is 112. National women helpline number is 181 and Cyber Crime Helpline is 1930.</p>
                </div>
                <div className='flex justify-between'>
                    <h1 className=' bg-orange-600 flex text-white rounded-xl p-2 font-semibold '>
                        <Link to="/CyberCrime">learn about cyber crime</Link>
                    </h1>
                    <h1 className=' bg-orange-600 flex text-white rounded-xl p-2 font-semibold '>
                        <Link to="/CyberCrime">t cyber crime</Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default cyber
