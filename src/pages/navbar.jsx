import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi"; // Imported HiMenu and HiX icons

import Logo from "../assets/RAHIL_FOUNDATION_LOGO-removebg-preview_20231205_111145_0000.png"
import Signup from "./signup"
import { IoIosMail } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Helmet } from 'react-helmet';

import { FaHandHoldingHeart } from "react-icons/fa";

import { FaInstagram, FaFacebook, FaYoutube, FaPhone } from "react-icons/fa6";

export default function Example( { currentPage } ) {
  const [ navbarOpen, setNavbarOpen ] = useState( false );

  const navigation = [
    { name: 'Home', href: '/', current: currentPage === 'Home' },
    { name: 'About', href: '/about', current: currentPage === 'About' },
    { name: 'Team', href: '/team', current: currentPage === 'Team' },
    { name: 'Blog', href: '/Blog', current: currentPage === 'Blog   ' },
    { name: 'Contact', href: '/contact', current: currentPage === 'Contact' },
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
        <a
          className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="#pablo"
        >
          {/* Your content */}
        </a>
        <a
          className="font leading-relaxed flex whitespace-nowrap uppercase text-white"
          href="tel:+918543810264"
        >
          <span>
            <FaPhone className="mt-1" />
          </span>
          <span>+91 9935201079</span>
        </a>
        <a
          className="font leading-relaxed flex gap-1 whitespace-nowrap uppercase text-white"
          href="mailto:rahilfoundationkanpur@gmail.com"
        >
          <span>
            <IoIosMail className="mt-1" />
          </span>
          <span>rahilfoundationkanpur@gmail.com</span>
        </a>
      </div>

      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>

    <div
      className={
        "lg:flex flex-grow items-center" +
        (navbarOpen ? " flex" : " hidden")
      }
      id="example-navbar-danger"
    >
      <ul className="flex  flex-col lg:flex-row list-none lg:ml-auto">
        <li className="nav-item">
          <a
            className="border-r-2 pr-6 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://www.instagram.com/rahil_foundation/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl leading-lg text-white opacity-75"></i>
            <span className=""><FaInstagram /></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="border-r-2 pr-6 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://www.facebook.com/rahilfoundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-xl leading-lg text-white opacity-75"></i>
            <span className=""><FaFacebook /></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className=" py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
            href="https://www.youtube.com/@RahilFoundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-2xl leading-xl text-white"></i>
            <span className=""><FaYoutube /></span>
          </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
      <Disclosure as="nav" className="backdrop-blur-3xl z-50 bg-white/60 sticky top-0 shadow-lg shadow-gray-300/50">
        {( { open } ) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20  items-center justify-center md:justify-between sm:justify-between">
                <div className="absolute inset-y-0 left-0 flex  items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <a href="/">
                    <img
                      className="h-20 md:h-40 lg:h-28  w-auto  "
                      src={Logo}
                      alt="rahil foundation logo"
                    />
                  </a>
                </div>
                <div className="flex flex-1  items-center justify-center ml-10 sm:items-stretch sm:justify-start">

                  <div className="hidden   sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm font-medium rounded-md hover:underline "
                        >
                        About us
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="/about"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                            Who we are
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                             what we do
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                             Director's
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                            Our location
                            </a>

                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                            Vision & Mission
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                            Supporters
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="relative inline-block text-left group">
                        <button
                          type="button"
                           className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm font-medium rounded-md hover:underline "
                        >
                        Resources
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >

                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                             Projects  and activities
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Calendars(Events)
                            </a>
                          </div>
                        </div>
                      </div>


                      <div className="relative inline-block text-left group">
                        <a
                          type="button"
                          href="/blog"
                           className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm font-medium rounded-md hover:underline "
                        >
                       Blogs & News
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>


                      </div>
                      <div className="relative inline-block text-left group">
                        <button
                          type="button"
                           className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm font-medium rounded-md hover:underline "
                        >
                        Contact us
                          <svg
                            className="-mr-1 ml-2 h-5 w-5 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <div className="hidden group-hover:block origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >

                            <a
                              href="https://forms.gle/BKbX4T41TLtW1VEc7"
                              target='blank'
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                             Get in touch
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                           FAQ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                 <button className="bg-blue-600 p-3 text-xl flex rounded-md text-white hover:bg-white font-bold hover:text-red-600 border border-solid border-white">
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
                {navigation.map( ( item ) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ) )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
