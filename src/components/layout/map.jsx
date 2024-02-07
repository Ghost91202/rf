import React from 'react';

const GoogleMap = ({ apiKey, location }) => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d619.0529044384626!2d80.32046871633987!3d26.431506496349435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x399c47a81bf8a3c7%3A0xdba3df04b01a49cd!2s1st%20floor%2C%20783%2F109%2C%20W-1%2C%20Juhi%20Kalan%2C%20Saket%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208011!3m2!1d26.431521099999998!2d80.3209632!5e1!3m2!1sen!2sin!4v1707303222571!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

  return (
    <div>
      <iframe
        title="Google Map"
        width="400"
        height="350"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
