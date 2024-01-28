import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

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
const Loading = lazy(() => import('./Loading.jsx'));

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <Routes className="md:overflow-hidden overflow-hidden w-full">
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Suspense fallback={<Loading />}><Signup /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<Loading />}><Blog /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<Loading />}><BlogList /></Suspense>} />
        <Route path="/blog/phishing_attacks" element={<Suspense fallback={<Loading />}><Blog2 /></Suspense>} />
        <Route path="/About" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="/add" element={<Suspense fallback={<Loading />}><BlogForm /></Suspense>} />
        <Route path="/Team" element={<Suspense fallback={<Loading />}><Team /></Suspense>} />
        <Route path="/navbar" element={<Suspense fallback={<Loading />}><Navbar2 /></Suspense>} />
        <Route path="/ContactUS" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
      </Routes>
    </Router>
  );
};

export default App;
