// components/Blog/BlogPost.js
import React from 'react';
import BlogVideo from './BlogVideo.jsx';
const BlogPost = ( { post } ) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-10 rounded-md shadow-md">
      <h1 className="text-4xl text-center border-b-2 border-orange-400 font-semibold mb-6">{post.title}</h1>

      <p className="text-gray-700 mb-4">{post.intro}</p>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading1}</h2>
      <p className="text-gray-700 mb-4">{post.para1}</p>
      <p className="text-gray-700 mb-4">{post.para2}</p>
      <p className="text-gray-700 mb-4">{post.para3}</p>
      {post.imgurl && <img src={post.imgurl} alt="rahil foundation" className="w-full mb-6 rounded-md" />}
      <h2 className="text-2xl font-semibold mb-4">{post.Heading2}</h2>
      <p className="text-gray-700 mb-4">{post.para4}</p>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading3}</h2>
      <h2 className="text-gray-700  mb-4">{post.content1}</h2>
      <h2 className="text-2xl font-semibold mb-4">{post. Heading41}</h2>
      <h2 className="text-gray-700  mb-4">{post.content21}</h2>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading42}</h2>
      <h2 className="text-gray-700  mb-4">{post. content32}</h2>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading4}</h2>
      <p className="text-gray-700 mb-4">{post.para5}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading51}</h2>
      <p className="text-gray-700 mb-4">{post. content41}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading61}</h2>
      <p className="text-gray-700 mb-4">{post. content51}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading71}</h2>
      <p className="text-gray-700 mb-4">{post. content61}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading81}</h2>
      <p className="text-gray-700 mb-4">{post. content71}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.Heading91}</h2>
      <p className="text-gray-700 mb-4">{post. content81}</p>

      <h2 className="text-2xl font-semibold mb-4">{post.Heading5}</h2>
      <p className="text-black-700 font-semibold mb-4">{post.list1}</p>
      <p className="text-gray-700 mb-4">{post.content2}</p>

      <p className="text-black-700 font-semibold mb-4">{post.list2}</p>
      <p className="text-gray-700 mb-4">{post.content3}</p>

      <p className="text-black-700 font-semibold mb-4">{post.list3}</p>
      <p className="text-gray-700 mb-4">{post.content4}</p>

      <p className="text-black-700 font-semibold mb-4">{post.list4}</p>
      <p className="text-gray-700 mb-4">{post.content5}</p>

      <p className="text-black-700 font-semibold mb-4">{post.list5}</p>
      <p className="text-gray-700 mb-4">{post.content6}</p>


      <BlogVideo videoUrl={post.videoUrl} />


    </div>
  );
};

export default BlogPost;
