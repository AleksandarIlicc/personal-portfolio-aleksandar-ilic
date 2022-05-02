import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);
    const nav = useRef(null);
    const navHeight = 80;

    const openNavigation = () => setOpenNav(!openNav);

    const stickyNavBar = () => {
        if (window.scrollY >= navHeight) {
            setStickyNav(true);

        } else {
            setStickyNav(false);
        }
    }

    window.addEventListener('scroll', stickyNavBar);

    return (
        <nav className={!stickyNav ? 'nav' : 'nav nav__sticky'} ref={nav}>
            <Bounce left>
                <div className="nav__logo">
                    <Link to="index.html">
                        <img src="/images/logo.jpg" alt="logo" />
                    </Link>
                </div>
            </Bounce>

            <Fade top cascade>
                <ul className={!openNav ? 'nav__list' : 'nav__list nav__list--active'}>
                    <li className="nav__item nav__link--home"><a href="index.html" className="nav__link">home</a></li>
                    <li className="nav__item nav__link--about"><a href="#section--1" className="nav__link">about me</a></li>
                    <li className="nav__item nav__link--skills"><a href="#section--2" className="nav__link">skills</a></li>
                    <li className="nav__item nav__link--projects"><a href="#section--3" className="nav__link">projects</a></li>
                    <li className="nav__item nav__link--contact"><a href="#section--4" className="nav__link">contact me</a></li>
                </ul>
            </Fade>

            <div className="nav__bar" onClick={openNavigation}>
                <div className="nav__bars"></div>
            </div>
        </nav>
    )
}

export default Nav;