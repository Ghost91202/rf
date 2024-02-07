import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Blog from "./components/blogs/index.jsx"
import About from "./components/layout/Aboutpage"
import BlogList from "./components/blogs/bloglist.jsx"
import Cybercrime from "./pages/cyberscrime"
import Projects from "./pages/Projects.jsx"
import "./App.css"
import Who from "./pages/who"
// Lazy-loaded components
const Signup = lazy(() => import("./pages/register.jsx"));
import Navbar from "./pages/navbar"
const Blog2 = lazy(() => import("./components/blogs/blog2"));

const Team = lazy(() => import("./components/layout/Team"));
const Navbar2 = lazy(() => import("./components/layout/navbar3"));

const BlogForm = lazy(() => import('./components/blogs/contentpost.jsx'));
const Contact = lazy(() => import("./components/layout/contactUs.jsx"));
const Loading = lazy(() => import('./Loading.jsx'));
import WhatsAppButton from './components/wattsbutton';
const App = () => {
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   window.addEventListener('contextmenu', handleContextMenu);

  //   return () => {
  //     window.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  return (
    <Router>
      <Navbar/>
      <Routes className="md:overflow-hidden overflow-hidden w-full">
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Suspense fallback={<Loading />}><Signup /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<Loading />}><Blog /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<Loading />}><BlogList /></Suspense>} />
        <Route path="/blog/phishing_attacks" element={<Suspense fallback={<Loading />}><Blog2 /></Suspense>} />
        <Route path="/About" element={<About />} />
        <Route path="/what_we_do" element={<Who />} />
        <Route path="/CyberCrime" element={<Cybercrime />} />
        <Route path="/projects" element={<Cybercrime />} />
        <Route path="/add" element={<BlogForm />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/navbar" element={<Navbar2 />} />
        <Route path="/ContactUS" element={<Contact />} />

      </Routes>
      <WhatsAppButton/>
    </Router>
  );
};

export default App;
