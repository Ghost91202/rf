import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Adjust the import path if needed
import Signup from "./pages/register.jsx"
import Blog from "./components/blogs/index.jsx"
import Blog2 from "./components/blogs/blog2"
import About from "./components/layout/Aboutpage"
import Team from "./components/layout/Team"
import Login from "./auth/login.jsx"
import Registration from "./auth/Registration.jsx"
import Navbar2 from "./pages/navbar"
import BlogList from "./components/blogs/bloglist.jsx"
import BlogForm from './components/blogs/contentpost.jsx';

import Contact from "./components/layout/contactUs.jsx"
const App = () => {

    //  useEffect(() => {
    // const handleContextMenu = (event) => {
    //   event.preventDefault();
    // };

    // // Add event listener when the component mounts
    // window.addEventListener('contextmenu', handleContextMenu);

    // // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('contextmenu', handleContextMenu);
    // };
    //  }, [] );


    return (
        <Router>
            <Routes className="md:overflow-hidden overflow-hidden w-full">
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/blog" element={<Blog />} />
                 <Route path="/blog/:id" element={<BlogList />} />
                <Route path="/blog/phishing_attacks" element={<Blog2/>} />
                <Route path="/About" element={<About />} />
                <Route path="/add" element={<BlogForm />} />
                {/* <Route path="/Certificates" element={<Pdf />} /> */}
                <Route path="/Team" element={<Team/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/navbar" element={<Navbar2 />} />
                <Route path="/ContactUS" element={<Contact />} />

                <Route path="/Signup" element={<Registration/>} />
                {/* <Route path="/Team" element={<Team/>} /> */}

            </Routes>
        </Router>
    );
};

export default App;
