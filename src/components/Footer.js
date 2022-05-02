import React from 'react';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer id="section--4" className="footer">

            <div className="footer__container">
                <div className="footer__box">
                    <h3 className="heading__tertiary--footer mb-medium">Location</h3>
                    <p>Europe, Nis</p>
                    <p>Republic of Serbia</p>
                </div>
                <div className="footer__box">
                    <h3 className="heading__tertiary--footer mb-medium">About</h3>
                    <p>Hi, my name is Aleksandar!</p>
                    <p>I am a frontend developer from Serbia.</p>
                </div>
                <div className="footer__box">
                    <h3 className="heading__tertiary--footer mb-medium">Contact Me</h3>
                    <i className="footer__email--icon fas fa-envelope"></i> <a href="mailto:aleksandari336@gmail.com"
                        className="footer__email">aleksandari336@gmail.com</a>
                </div>
                <div className="footer__box">
                    <h3 className="heading__tertiary--footer mb-medium">Socials</h3>
                    <div className="footer__socials">
                        <div className="footer__social">
                            <a href="https://www.facebook.com/aleksandar.ilic.9085" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div className="footer__social">
                            <a href="https://www.instagram.com/aleksandar__ilicc" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="footer__social">
                            <a href="https://github.com/AleksandarIlicc" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="footer__copyright mt-large">&copy; {currYear} Aleksandar Ilic</p>

        </footer>
    )
}

export default Footer;