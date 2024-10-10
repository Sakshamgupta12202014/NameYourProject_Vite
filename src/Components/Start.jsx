import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import App from './App/App';
import './Start.css';
import FollowUs from './followUs/FollowUs';
import About from './AboutUs/About';

function Start() {
    return (
        <Router>
            <div className='navBar'>

                <div className='navItems'>
                    <Link to="/" style={{color:"#fff" ,textDecoration: "none"}} className='nav-link'>Home</Link>
                </div>

                <div className='navItems'>
                    <Link to="/searchname" style={{color:"#fff" ,textDecoration: "none"}} className='nav-link'>Brainstorm_Names</Link>
                </div>

                <div className='navItems'>
                    <Link to="/about" style={{color:"#fff" ,textDecoration: "none"}} className='nav-link'>About_Us</Link>
                </div>

                <div className='navItems'>
                    <Link to="/followUs" style={{color:"#fff" ,textDecoration: "none"}} className='nav-link'>Follow_Us</Link>
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/searchname" element={<App />} />
                <Route path="/followus" element={<FollowUs />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </Router>
    );
}

export default Start;
