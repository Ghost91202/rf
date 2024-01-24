import React from 'react';
import Slider from 'react-slick';
import cyber1 from "../assets/banner1.jpg"
import cyber2 from "../assets/banner 2.jpg"
import cyber3 from "../assets/banner 3.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
 

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-1 lg:pl-10 flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-extrabold tracking-tight leading-none text-gray-900">
                    Empowering <span className='text-blue-600'>Communities</span>, Defending <span className='text-blue-600'>Digital Trust</span>
                </h1>
                <p className="mt-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                    <span className='font-bold text-blue-600 text-2xl'>"</span>
                    Pioneering a vision for a digitally empowered India, Rahil Foundation stands at the forefront of a non-profit organization committed to elevating cyber literacy and combating cyber fraud and crime in our society.<span className='font-bold text-blue-600 text-2xl'>"</span>
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900">
                        {/* Add your secondary action here */}
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ImageSlider;
