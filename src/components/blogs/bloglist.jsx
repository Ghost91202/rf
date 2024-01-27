// components/Blog/BlogList.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPost from './BlogPost.jsx';
import blogData from './data/blogData.jsx'; // Adjust the path accordingly
import Navbar from '../../pages/navbar';
import './BlogList.css'; // Import the CSS file for styling
import Footer from '../../pages/footer.jsx';

const BlogList = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data based on the id parameter or use static data
    const post = blogData.find((post) => post.id === parseInt(id));
    setCurrentPost(post);
  }, [id]);

  const handleNextBlog = () => {
    const currentIndex = blogData.findIndex((post) => post.id === currentPost.id);
    const nextIndex = (currentIndex + 1) % blogData.length;
    navigate(`/blog/${blogData[nextIndex].id}`);
  };

  const handlePrevBlog = () => {
    const currentIndex = blogData.findIndex((post) => post.id === currentPost.id);
    const prevIndex = (currentIndex - 1 + blogData.length) % blogData.length;
    navigate(`/blog/${blogData[prevIndex].id}`);
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden ">
      <Navbar />
      <div className="blog-list-container max-w-4xl mx-auto p-4 md:p-8">
        {currentPost ? (
          <>
            <BlogPost post={currentPost} />
            <div className="blog-navigation mt-4 md:flex md:justify-between">
              <button
                onClick={handlePrevBlog}
                className="navigation-button mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
                disabled={blogData.length === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNextBlog}
                className="navigation-button w-full md:w-auto"
                disabled={blogData.length === 1}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
