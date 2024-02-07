import React, { useState, useEffect } from 'react';
import './Marquee.css'; // Import your CSS file for styling

const Marquee = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const duration = 80000;
    const padding = 20;
    const marqueeContent = document.getElementById('marqueeContent');

    const marqueeHeight = marqueeContent.offsetHeight + padding * 2;

    const animateMarquee = () => {
      setOffset((prevOffset) => (prevOffset + 1) % marqueeHeight);
    };

    const intervalId = setInterval(animateMarquee, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className="marquee-sibling">Breaking News</div>
      <div className="marquee">
        <div id="marqueeContent" className="marquee-content">
          <div className="marquee-content-items">
            <p>
              <b>&raquo;</b> 1 asdasd asdasd asd asd asda sdasd asd asd asd asd weg bfdas fasf asfxxx
            </p>
          </div>
          <div className="marquee-content-items">
            <p>
              <b>&raquo;</b> 2 asdasd asdasd asd asd asda sdasd asd asd asd asd weg bfdas fasf asfxxx
            </p>
          </div>
          <div className="marquee-content-items">
            <p>
              <b>&raquo;</b> 3 asdasd asdasd asd asd asda sdasd asd asd asd asd weg bfdas fasf asfxxx
            </p>
          </div>
          <div className="marquee-content-items">
            <p>
              <b>&raquo;</b> asdasd asdasd asd asd asda sdasd asd asd asd asd weg bfdas fasf asfxxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
