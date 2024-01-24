import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Services from "./service.jsx"
import About from "../components/layout/About.jsx"
// import Content from './content.jsx'
// import Accordians from './accordians.jsx'
// import Testrimonials from './testimonials'
import Footer from "../components/layout/Footer.jsx"
// import Newslatter from "./newslatter.jsx"
// import Regitration from "./regitration.jsx"
// import Faq from "./faq.jsx"
// import GetinTouch from "./getintouch.jsx"
// import Cta from "./cta.jsx"
import Carousel from "./carousal.jsx"

const home = () => {
    return (
        <div className='flex flex-col justify-center h-auto'>

            <Navbar />
            <Carousel />

            <Services />
              <Hero />
            <About />
            {/* <Content /> */}

            {/* <Accordians />
            <Cta /> */}

            {/* <Faq /> */}
            {/* <GetinTouch /> */}
            {/* <Newslatter /> */}
            <Footer />
        </div>
    )
}

export default home
