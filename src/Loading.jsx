import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-skeleton"></div>
      <div className="loading-text"></div>
    </div>
  );
};

export default Loading;
