import React from 'react';
import logo from '../../img/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navLogo">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="navItem">
                <ul className="navMenuList">
                    <li><a href="#about"><span>01.</span>about</a></li>
                    <li><a href="#projects"><span>02.</span>projects</a></li>
                    <li><a href="#work"><span>03.</span>work</a></li>
                    <li><a href="#contact"><span>04.</span>contact</a></li>
                </ul>
                <div>
                    <button className="btn">Resume</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;