import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./button.css"
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
const WhatsAppButton = () => {
  const [props, set] = useSpring(() => ({
    scale: 1,
  }));

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // Display message for 2 seconds
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <animated.button
        style={{ transform: props.scale.interpolate((s) => `scale(${s})`) }}
        className="whatsapp-button"
        onClick={() => set({ scale: 1.2 })}
        onMouseLeave={() => set({ scale: 1 })}
          >
         <Link

                to="tel:+919935201079"
              >

                 <IoLogoWhatsapp className="lg:text-4xl"/>

              </Link>

      </animated.button>
      {showMessage && (
        <div className="help-message mb-3   ">
          <p>How can I help you?</p>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
