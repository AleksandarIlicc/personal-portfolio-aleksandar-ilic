import React from 'react';
import Flip from 'react-reveal/Flip';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__box">
                    <Flip left delay={500}>
                        <h1 className="heading__primary heading--anm mb-medium">
                            Looking for Frontend Developer?
                        </h1>
                    </Flip>
                    <p className="header__para para--anm">Hi everyone, I am Aleksandar Ilic a frontend developer living in Nis,
                        Serbia.
                    </p>
                    <a href="#section--3">
                        <button className="btn btn__header">See projects</button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;