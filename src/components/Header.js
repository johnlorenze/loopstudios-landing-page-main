import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

function Header() {
    const [isMenuOpen, setMenuIcon] = useState(false);
    const [icon, setIcon] = useState(hamburger);
    const [toggleOverlay, setOverlay] = useState("");

    const setCloseMenu = () => {
        setMenuIcon(false);
        setOverlay("");
        setIcon(hamburger);
        document.querySelector("body").style.overflow = "auto";
    }

    const setOpenMenu = () => {
        setMenuIcon(true);
        setOverlay("header__navbarToggle");
        setIcon(close);
        document.querySelector("body").style.overflow = "hidden";
    }

    return (
        <div className="header">
            <div className={`image-overlay ${toggleOverlay}`} >
                <div className="header__background" />
            </div>

            <div className="header__nav">
                <img src={logo} alt="Loading..." />
                <ul className={`header__navMenu ${toggleOverlay}`} >
                    <li className="font-alata">About</li>
                    <li className="font-alata">Careers</li>
                    <li className="font-alata">Events</li>
                    <li className="font-alata">Products</li>
                    <li className="font-alata">Support</li>
                </ul>
                <img
                    className="header__navMenuMobile"
                    src={icon}
                    alt="Loading..."
                    onClick={isMenuOpen ? setCloseMenu : setOpenMenu}
                />
            </div>
            <div className={`header__heroContent font-josefin ${toggleOverlay}`}>
                <p>Immersive experiences that deliver</p>
            </div>
        </div>
    )
}

export default Header
