import { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Fade, Slide } from "react-awesome-reveal";
import { navLinks } from "../data/nav-links";

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
  };

  window.addEventListener("scroll", stickyNavBar);

  return (
    <nav className={!stickyNav ? "nav" : "nav nav__sticky"} ref={nav}>
      <Fade down cascade damping={0.1}>
        <ul className={!openNav ? "nav__list" : "nav__list nav__list--active"}>
          {navLinks.map(({ sectionId, text }, index) => {
            return (
              <Slide direction="down" triggerOnce>
                <li key={index} className="nav__item">
                  <ScrollLink
                    className="nav__link"
                    activeClass="active"
                    to={sectionId}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {text}
                  </ScrollLink>
                </li>
              </Slide>
            );
          })}
        </ul>
      </Fade>

      <div className="nav__bar" onClick={openNavigation}>
        <div className="nav__bars"></div>
      </div>
    </nav>
  );
};

export default Nav;
