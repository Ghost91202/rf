import React, { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./navbar.jsx'));
const Carousel = lazy(() => import('./carousal.jsx'));
const Services = lazy(() => import('./service.jsx'));
const How = lazy(() => import('../components/layout/howto.jsx'));
const Ourstr = lazy(() => import('../components/layout/Stories.jsx'));
const Newslatter = lazy(() => import('./newslatter.jsx'));
const Footer = lazy(() => import('./footer.jsx'));
const Faq = lazy(() => import('../components/layout/faq.jsx'));

const Home = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Carousel />
        <Services />
        <How />
        <Ourstr />
        <Faq />
        <Newslatter />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
