import React from 'react';
import logo from '../../img/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navLogo">
                <img src={logo} alt="" srcset="" />
            </div>
            <input type="checkbox" id="navCheck" />
            <label htmlFor="navCheck">
                <FontAwesomeIcon icon={faBarsStaggered} className="bar" />
            </label>
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