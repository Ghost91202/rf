// components/Blog/BlogCoverList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from './data/blogData';
import './BlogCoverList.css';
import Navbar from '../layout/navbar';
import Footer from '../layout/Footer';

const BlogCoverList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; // Adjust the number of posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div>
<Navbar />
    <div className="min-h-screen flex flex-col justify-center items-center  ">

      <div className=" p-8 mx-auto max-w-screen-lg  bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-4xl mb-8 text-center">All Blogs</h1>
        <div className=" w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentPosts.map((post) => (
            <div key={post.id} className="flex mb-14">
              <Link to={`/blog/${post.id}`} className="blog-cover-link">
                <div className="blog-cover w-full rounded-lg overflow-hidden shadow-md bg-gray-200">
                  <img src={post.coverImageUrl} alt={`Cover for ${post.title}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Next
          </button>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default BlogCoverList;
