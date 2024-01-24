import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'; // Adjust the import path if needed
import "./App.css"
import About from "./components/layout/Aboutpage.jsx"
import Team from "./components/layout/Team.jsx"
const App = () => {
    return (
        <Router>
            <Routes className="md:overflow-hidden w-screen overflow-hidden">
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Team" element={<Team />} />
            </Routes>
        </Router>
    );
};
export default App;
