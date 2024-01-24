// components/Blog/BlogPost.js
import React from 'react';
import BlogVideo from './BlogVideo.js';
const BlogPost = ({ post }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-10 bg-white rounded-md shadow-md">
      <h1 className="text-4xl text-center border-b-2 border-orange-400 font-semibold mb-6">{post.title}</h1>

      <p className="text-gray-700 mb-4">{post.intro}</p>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading1}</h2>
      <p className="text-gray-700 mb-4">{post.para1}</p>
      <p className="text-gray-700 mb-4">{post.para2}</p>
      <p className="text-gray-700 mb-4">{post.para3}</p>

      {post.imgurl && <img src={post.imgurl} alt="blog-image" className="w-full mb-6 rounded-md" />}

      <h2 className="text-2xl font-semibold mb-4">{post.Heading2}</h2>
      <p className="text-gray-700 mb-4">{post.para4}</p>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading3}</h2>
      <p className="text-gray-700 mb-4">{post.para5}</p>

      <BlogVideo videoUrl={post.videoUrl} />


    </div>
  );
};

export default BlogPost;
