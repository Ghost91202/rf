import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Adjust the import path if needed

// Lazy-loaded components
const Signup = lazy(() => import("./pages/register.jsx"));
const Blog = lazy(() => import("./components/blogs/index.jsx"));
const Blog2 = lazy(() => import("./components/blogs/blog2"));
const About = lazy(() => import("./components/layout/Aboutpage"));
const Team = lazy(() => import("./components/layout/Team"));

const Navbar2 = lazy(() => import("./pages/navbar"));
const BlogList = lazy(() => import("./components/blogs/bloglist.jsx"));
const BlogForm = lazy(() => import('./components/blogs/contentpost.jsx'));
const Contact = lazy(() => import("./components/layout/contactUs.jsx"));

const App = () => {

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Add event listener when the component mounts
    window.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <Routes className="md:overflow-hidden overflow-hidden w-full">
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}><Signup /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<div>Loading...</div>}><BlogList /></Suspense>} />
        <Route path="/blog/phishing_attacks" element={<Suspense fallback={<div>Loading...</div>}><Blog2 /></Suspense>} />
        <Route path="/About" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path="/add" element={<Suspense fallback={<div>Loading...</div>}><BlogForm /></Suspense>} />
        {/* <Route path="/Certificates" element={<Pdf />} /> */}
        <Route path="/Team" element={<Suspense fallback={<div>Loading...</div>}><Team /></Suspense>} />
        {/* <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} /> */}
        <Route path="/navbar" element={<Suspense fallback={<div>Loading...</div>}><Navbar2 /></Suspense>} />
        <Route path="/ContactUS" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        {/* <Route path="/Signup" element={<Suspense fallback={<div>Loading...</div>}><Registration /></Suspense>} /> */}
        {/* <Route path="/Team" element={<Team/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
