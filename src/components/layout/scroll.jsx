import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../scroll.css"
const YourComponent = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.card');
    const header = document.querySelector('.header');
    const animation = gsap.timeline();

    cards.forEach((card, index) => {
      if (index > 0) {
        // Increment y value of each card by 200px
        gsap.set(card, { y: index * 200 });
        // Animate each card back to 0 (for stacking)
        animation.to(card, { y: 0, duration: index * 0.5, ease: 'none' }, 0);
      }
    });

    ScrollTrigger.create({
      trigger: '.wrapper',
      start: 'top top',
      pin: true,
      end: `+=${cards.length * 200 + header.offsetHeight}`,
      scrub: true,
      animation: animation,

    });
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>

      <div className="spacer" style={{ height: '5vh' }}>
      </div>
      <div className="wrapper">
        <div className="header">
       process
          <br />

        </div>
        <div className="cards">
          <div className="card">Phase 1</div>
          <div className="card">Phase 2</div>
          <div className="card">Phase 3</div>
          <div className="card">Phase 4</div>
        
        </div>
      </div>


    </>
  );
};

export default YourComponent;
