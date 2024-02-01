import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../cards.css"
const HorizontalScroll = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSection = document.querySelector('.horizontal');

    gsap.to('.horizontal', {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: '+=2000px',
        pin: '#horizontal-scoll',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      {/* Intro */}
      <section className="intro">
        <h1>Horizontal Scrolling Cards with GSAP</h1>
      </section>

      {/* Horizontal Scroll */}
      <section id="horizontal-scoll">
        <div className="horizontal-scoll-wrapper">
          <div className="horizontal">
            {/* Card 1 */}
            <div>
              <div className="card">
                <h2>Card 1</h2>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="card">
                <h2>Card 2</h2>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <div className="card">
                <h2>Card 3</h2>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              <div className="card">
                <h2>Card 4</h2>
              </div>
            </div>

            {/* Card 5 */}
            <div>
              <div className="card">
                <h2>Card 5</h2>
              </div>
            </div>

            {/* Card 6 */}
            <div>
              <div className="card">
                <h2>Card 6</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h2>Credits</h2>
          <a href="https://www.humming.design" target="_blank" rel="noopener noreferrer">
            Humming
          </a>
          <a href="https://greensock.com" target="_blank" rel="noopener noreferrer">
            GSAP
          </a>
        </div>
      </footer>
    </>
  );
};

export default HorizontalScroll;
