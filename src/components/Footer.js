import React from 'react';
import '../styles/Footer.css';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__info">
                <div className="footer__infoLogo">
                    <img src={logo} alt="Loading..." />
                </div>

                <div className="footer__infoSocial">
                    <img src={facebook} alt="Loading..." />
                    <img src={twitter} alt="Loading..." />
                    <img src={pinterest} alt="Loading..." />
                    <img src={instagram} alt="Loading..." />
                </div>

                <ul className="footer__infoMenu">
                    <li className="font-alata">About</li>
                    <li className="font-alata">Careers</li>
                    <li className="font-alata">Events</li>
                    <li className="font-alata">Products</li>
                    <li className="font-alata">Support</li>
                </ul>

                <span className="footer__infoCopyright font-alata">
                    © 2021 Loopstudios. All rights reserved.
                </span>
            </div>

            <div class="attribution font-alata">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">John Lorenze</a>.
            </div>
        </div>
    )
}

export default Footer