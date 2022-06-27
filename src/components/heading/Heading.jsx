import React from 'react';
import './Heading.css'
const Heading = () => {
    return (
        <div className="heading">
            <p className="intro">Hi, my name is</p>
            <p className="headingText name">Suzibur Rahman</p>
            <p className="headingText">I build modern web app.</p>
            <p className="description">I'm a Javascript developer. I've expertise in building a modern web app with React, Redux, Firebase, and much more latest technology.</p>
            <button className="btn">Check out me</button>
        </div>
    );
};

export default Heading;