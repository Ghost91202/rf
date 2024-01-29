import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi"; // Imported HiMenu and HiX icons
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import Signup from "./signup"
import { IoIosMail } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Helmet } from 'react-helmet';

import { FaHandHoldingHeart } from "react-icons/fa";

import { FaInstagram, FaFacebook, FaYoutube, FaPhone } from "react-icons/fa6";

export default function Example( { currentPage } ) {
  const [ navbarOpen, setNavbarOpen ] = useState( false );

  const navigation = [
    { name: 'Home', to: '/', current: currentPage === 'Home' },
    { name: 'About', to: '/about', current: currentPage === 'About' },
    { name: 'Team', to: '/team', current: currentPage === 'Team' },
    { name: 'Blog', to: '/blog', current: currentPage === 'Blog  ' },
    { name: 'Contact', to: '/contact', current: currentPage === 'Contact' },
  ];

  const classNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' );
  };
  return (
    <div className='z-999'>

      <nav className="relative flex-wrap items-center hidden md:flex overflow-hidden w-full  pr-10   lg:w-full md:w-full sm:w-full sm:overflow-hidden md:overflow-hidden justify-between  py-2 bg-orange-500">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-screen relative flex flex-wrap justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex w-full gap-1 text-xs md:text-md xl:text-md md:gap-5">
              <Link
                className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="#pablo"
              >
                {/* Your content */}
              </Link>
              <Link
                className="font leading-relaxed flex whitespace-nowrap uppercase text-white"
                to="tel:+918543810264"
              >
                <span>
                  <FaPhone className="mt-1" />
                </span>
                <span>+91 9935201079</span>
              </Link>
              <Link
                className="font leading-relaxed flex gap-1 whitespace-nowrap uppercase text-white"
                to="mailto:rahilfoundationkanpur@gmail.com"
              >
                <span>
                  <IoIosMail className="mt-1" />
                </span>
                <span>rahilfoundationkanpur@gmail.com</span>
              </Link>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen( !navbarOpen )}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              ( navbarOpen ? " flex" : " hidden" )
            }
            id="example-navbar-danger"
          >
            <ul className="flex  flex-col lg:flex-row list-none gap-5 lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="border-r-2 pr-6 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="https://www.instagram.com/rahil_foundation/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-xl leading-lg text-white opacity-75"></i>
                  <span className="">In.<FaInstagram /></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="border-r-2 pr-6 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="https://www.facebook.com/rahilfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook text-xl leading-lg text-white opacity-75"></i>
                  <span className="">Fb.<FaFacebook /></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className=" py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="https://www.youtube.com/@RahilFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube text-2xl leading-xl text-white"></i>
                  <span className="">Yt.<FaYoutube /></span>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Disclosure as="nav" className="backdrop-blur-3xl z-50 bg-white/60 sticky top-0  ">
        {( { open } ) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20  items-center justify-center md:justify-between sm:justify-between">
                <div className="absolute inset-y-0 left-0 flex  items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex   justify-center ml-40  md:ml-1 items-center">
                  <Link to="/">
                    <img
                      className="h-20 md:h-40 lg:h-28  w-auto  "
                      src={Logo}
                      alt="rahil foundation logo"
                    />
                  </Link>
                </div>
                <div className="flex flex-1  items-center justify-center ml-10 sm:items-stretch sm:justify-start">

                  <div className="hidden   sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center border-r  border-gray-400 px-4 py-2   text-sm font-medium hover:underline "
                        >
                          About us

                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56 bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <Link
                              to="/about"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Who we are
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              what we do
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Director's
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Our location
                            </Link>

                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Vision & Mission
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Supporters
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="relative inline-block text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center border-r  border-gray-400 px-4 py-2   text-sm font-medium hover:underline "
                        >
                          Resources

                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56  bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >

                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Projects  and activities
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Calendars(Events)
                            </Link>
                          </div>
                        </div>
                      </div>


                      <div className="relative inline-block text-left group">
                        <Link
                          type="button"
                          to="/blog"
                          className="inline-flex justify-center items-center border-r  border-gray-400 px-4 py-2   text-sm font-medium hover:underline "
                        >
                          Blogs & News

                        </Link>


                      </div>
                      <div className="relative inline-block text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center border-r  border-gray-400 px-4 py-2   text-sm font-medium hover:underline "
                        >
                          Contact us

                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56  bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >

                            <Link
                              to="https://forms.gle/BKbX4T41TLtW1VEc7"
                              target='blank'
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Get in touch
                            </Link>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              FAQ
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <button className="border border-orange-600 p-3 flex text-orange-600  hover:bg-white font-bold hover:text-orange-600  border-solid ">
                  <FaHandHoldingHeart className="" />
                  Donate
                </button>
                <div className='gap-6 flex'>

                  <button className='bg-blue-600  text-white rounded-lg hidden text-sm p-1 -ml-20 md-text-lg '>
                    +  Join Now
                  </button>
                </div>
              </div>
            </div>

         <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
