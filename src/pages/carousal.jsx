import React from 'react';
import Slider from 'react-slick';
import cyber1 from "../assets/1.jpg"
import cyber2 from "../assets/2.jpg"
import cyber3 from "../assets/3.jpg"
import cyber4 from "../assets/4.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000, // Set the duration for each slide
        responsive: [
        {
            breakpoint: 1024, // Large PCs
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, // Tablets
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Mobile devices
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };

    return (
      <div className='w-screen  overflow-hidden'>

    <Slider {...settings}>
      <div>
        <img src={cyber1} alt="rahil foundation" className='w-screen'/>
      </div>
      <div>
        <img src={cyber2} alt="rahil foundation" className='w-screen'/>
      </div>
      <div>
        <img src={cyber3} alt="rahil foundation" className='w-screen'/>
      </div>
      <div>
        <img src={cyber4} alt="rahil foundation" className='w-screen'/>
      </div>
      {/* Add more slides as needed */}
    </Slider>
      </div>
  );
};

export default ImageSlider;
