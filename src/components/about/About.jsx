import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div id="about">
            <div className="title">
                <h1><span>01</span>About</h1>
                <div className="border"></div>
            </div>
            <div className='aboutContainer'>
                <div className="aboutText">
                    <p>Lorem ipsum dolor sit, <span>amet consectetur adipisicing elit</span> . Dignissimos, ratione eaque. Nemo eaque cum, magni placeat quae assumenda. Dolorum odit saepe impedit, nemo numquam <span>voluptatibus exercitationem</span> dolore aspernatur ipsam facilis, reprehenderit animi quo dicta autem! Eius quaerat fuga facere iusto reiciendis cum et.</p>
                    <p>Lorem ipsum <span>dolor sit, amet </span> consectetur adipisicing elit. Ipsa in assumenda dolorem. Sequi blanditiis sapiente dolore, ea architecto quia.</p>
                    <p>Lorem ipsum <span>dolor sit, amet </span> consectetur adipisicing elit. Ipsa in assumenda dolorem.</p>
                    <br />
                    <div className="technology">
                        <p>Here are a few technologies I've been working.</p>
                        <ul className="techIcon">
                            <li><FontAwesomeIcon icon={faReact}/></li>
                            <li><FontAwesomeIcon icon={faNode}/></li>
                            <li><FontAwesomeIcon icon={faJs}/></li>
                            <li><FontAwesomeIcon icon={faHtml5}/></li>
                            <li><FontAwesomeIcon icon={faCss3}/></li>
                        </ul>
                    </div>
                </div>
                <div className="aboutImg">
                    <div className="img">
                        <div className="imgOverlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;