import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../cards2.css"
const HeroSection = () => {
  useEffect(() => {
    // Get the list and list items using React ref
    const scrollList = document.getElementById("list");
    const listItems = Array.from(scrollList.getElementsByTagName("li"));

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // fade in
    tl.to(listItems, { opacity: 1, stagger: 1 });

    // fade out
    tl.to(listItems.slice(0, -1), { opacity: 0.15, stagger: 1 }, 1);

    // since fade in stagger and fade out offset is the same.
    // the current element's fade out animation will start as soon as the next elements fade in animation begins

    ScrollTrigger.create({
      animation: tl,
      trigger: '#list',
      start: 'top center',
      end: '+=500',
      scrub: 0.1,
    });
  }, []); // Run this effect only once when the component mounts

  return (
    <main>
      <section id="hero-section">
        <div id="hero-image-wrapper"></div>
        <div className="container">
          <ul id="list">
            <li>Up to 2x more Active Noise Cancellation.</li>
            <li>Transparency mode to hear the world around you.</li>
            <li>
              All-new Adaptive Audio intelligently tailors noise control to your
              environment.
            </li>
            <li>Spatial Audio takes immersion to a remarkably personal level.</li>
            <li>And a single charge delivers 6 hours of battery life.</li>
          </ul>
        </div>
        <div id="hero-image-wrapper"></div>
      </section>
    </main>
  );
};

export default HeroSection;
