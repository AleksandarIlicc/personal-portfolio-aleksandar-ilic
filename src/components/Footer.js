import { InlineWidget } from "react-calendly";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="calendly">
          <InlineWidget
            styles={{ maxWidth: "100%", height: "63rem" }}
            url="https://calendly.com/aleksandari336"
          />
        </div>
        <div className="footer__grid">
          <div className="footer__box">
            <h3 className="heading__tertiary mb-[2rem]">Location</h3>
            <p>Europe, Nis</p>
            <p>Republic of Serbia</p>
          </div>

          <div className="footer__box">
            <h3 className="heading__tertiary mb-[2rem]">About</h3>
            <p>Hi, my name is Aleksandar!</p>
            <p>I am a frontend developer from Serbia.</p>
          </div>

          <div className="footer__box">
            <h3 className="heading__tertiary mb-[2rem]">Contact Me</h3>
            <i className="footer__email--icon fas fa-envelope"></i>{" "}
            <a href="mailto:aleksandari336@gmail.com" className="footer__email">
              aleksandari336@gmail.com
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-[4rem] mb-[2rem] border-[#64748b]" />

      <div className="footer__copyright-box">
        <p className="footer__copyright">&copy; {currYear} Aleksandar Ilic</p>
        <div className="footer__socials">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/aleksandar.ilic.9085"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/aleksandar__ilicc"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com/AleksandarIlicc"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/aleksandarilic18"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
