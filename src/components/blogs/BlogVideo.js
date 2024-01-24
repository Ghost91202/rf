// components/Blog/BlogVideo.js
import React from 'react';

const BlogVideo = ({ videoUrl }) => {
  return (
    <div className='w-full flex justify-center'>
      <iframe title="blog-video" src={videoUrl} frameborder="0" allowfullscreen></iframe>
    </div>
  );
};

export default BlogVideo;
