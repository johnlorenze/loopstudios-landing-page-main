import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';
import hero from '../images/desktop/image-hero.jpg';
import heroMobile from '../images/mobile/image-hero.jpg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

function Header({ isMobile }) {
    const [isMenuOpen, setMenuIcon] = useState(false);
    const [icon, setIcon] = useState(hamburger);
    const [toggleOverlay, setOverlay] = useState("");

    const setCloseMenu = () => {
        setMenuIcon(false);
        setOverlay("");
        setIcon(hamburger);
        document.body.style.overflow = "auto";
        document.getElementById("main").style.backgroundColor = "white";
    }

    const setOpenMenu = () => {
        setMenuIcon(true);
        setOverlay("header__navbarToggle");
        setIcon(close);
        document.body.style.overflow = "hidden";
        document.getElementById("main").style.backgroundColor = "black";
    }

    return (
        <div className="header">
            <div className={`image-overlay ${toggleOverlay}`}>
                <img
                    className="header__background"
                    src={isMobile ? heroMobile : hero}
                    alt="Loading..."
                />
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
