import React from 'react'
import Bgimg from "../assets/Blue Minimalist Creative Business Plan Presentation (169).jpg"

const service = () => {
    return (
        <section className='h-96 -mt-5'>

            <img src={Bgimg} alt="" className='	absolute -z-10 md:h-96  w-screen' />


            <div className=' items-center  mx-auto max-w-screen-xl pt-10 pb-10'>

                <div className="lg:grid lg:grid-cols-3 gap-2  md:grid-cols-3 md:gap-1 sm:grid-cols-1 sm:p-3 ">

                    <div className="max-w-sm m-3 bg-white border  ml-10  hover:shadow-2xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <a href="/blog">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/blog">
                                <h5 className="mb-2  text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PHISHING AWARENESS</h5>
                            </a>
                            <p className="mb-3 text-sm md:text-lg font-normal text-gray-700 dark:text-gray-400">
                                Phishing awareness is a
                                critical aspect of staying safe in the Digital world. Phishing is a
                                type of Cyber Attack where scammers use deceptive tactics to
                                trick individuals into divulging sensitive information....
                            </p>
                            <a href="/blog/phishing_attacks" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm m-3 hidden md:flex bg-white border shadow-md hover:shadow-2xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/blog">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/blog">
                                <h5 className="mb-2 text-xl font-bold md:text-2xl tracking-tight text-gray-900 dark:text-white">SOCIAL MEDIA SAFETY</h5>
                            </a>
                            <p className="mb-3 text-sm md:text-lg font-normal text-gray-700 dark:text-gray-400">
                                As Our Lives Increasingly Intertwine with the Digital Nation, Rahil
                                Foundation Stands at the Frontline of Promoting Responsible
                                Online Engagement. In this Content Piece, We delve into the
                                Complicated Environment....
                            </p>
                            <a href="/blog" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm m-3 hidden md:flex  bg-white border shadow-md hover:shadow-2xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/blog">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/blog">
                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DATA SECURE</h5>
                            </a>
                            <p className="mb-3 text-sm md:text-lg font-normal text-gray-700 dark:text-gray-400">

                                In An Growingly Interconnected World, Where our Personal and
                                Professional Lives Revolve around Digital Devices, the Importance
                                of Safeguarding our Data cannot be Overstated. Rahil Foundation is
                                Committed....
                            </p>
                            <a href="/blog" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default service
