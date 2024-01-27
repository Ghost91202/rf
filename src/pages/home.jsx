import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Services from "./service.jsx"
import About from "../components/layout/About.jsx"
// import Content from './content.jsx'
// import Accordians from './accordians.jsx'
// import Testrimonials from './testimonials'
import Footer from "./footer.jsx"
import Newslatter from "./newslatter.jsx"
// import Regitration from "./regitration.jsx"
import Faq from "../components/layout/faq.jsx"
// import GetinTouch from "../components/layout/getintouch.jsx"
// import Cta from "./cta.jsx"
import Carousel from "./carousal.jsx"
import How from "../components/layout/howto.jsx"
import Ourstr from "../components/layout/Stories.jsx"

const home = () => {
    return (
        <div className='w-screen overflow-x-hidden'>

            <Navbar />
            <Carousel />

            <Services />
            <How />
            <Ourstr/>
              {/* <Hero /> */}



            {/* <Accordians />
            <Cta /> */}

            <Faq />
            {/* <GetinTouch /> */}
            <Newslatter />
            <Footer />
        </div>
    )
}

export default home
