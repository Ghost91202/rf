import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './conponents/layout/home.jsx'; // Adjust the import path if needed

import About from "./conponents/layout/Aboutpage.jsx"
import Team from "./conponents/layout/Team.jsx"


const App = () => {
    return (
        <Router>
            <Routes className="md:overflow-hidden overflow-hidden w-full">
                <Route path="/" element={<Home />} />

                <Route path="/About" element={<About/>} />
                <Route path="/Team" element={<Team/>} />


            </Routes>
        </Router>
    );
};

export default App;
