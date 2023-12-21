import { Link as ScrollLink } from "react-scroll";
import { Bounce, Slide } from "react-awesome-reveal";
import { headerIcons } from "../data/header-icons";

const Header = () => {
  return (
    <header id="home" className="header">
      <aside className="header__aside">
        <div className="flex flex-col items-center justify-center mb-[10rem]">
          <figure className="header__profile-img">
            <img src="/images/profile-image.png" alt="Profile image" />
          </figure>
          <span className="text-[2rem]">Web Developer</span>
        </div>

        <div>
          {headerIcons.map(({ src, alt, text, sectionId }, index) => {
            return (
              <div key={index} className="header__aside-link">
                <img src={src} alt={alt} />
                {/* <Slide cascade={false} direction="down" delay={index * 200}> */}
                <ScrollLink
                  activeClass="active"
                  to={sectionId}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {text}
                </ScrollLink>
                {/* </Slide> */}
              </div>
            );
          })}
        </div>
      </aside>

      <main className="header__main">
        <div>
          <Slide direction="down">
            <h1 className="heading__primary">
              Grow your online business presence with Webflow.
            </h1>
          </Slide>

          {/* <Slide direction="down"> */}
          <p className="header__text">
            Enhance your digital footprint and expand your online business
            effortlessly through the power of <span>Webflow</span>. Elevate your
            brand's visibility, captivate your audience, and{" "}
            <span>streamline your online presence.</span>
          </p>
          {/* </Slide> */}

          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {/* <Slide> */}
            <button className="btn btn__book" href="contact">
              Book an Appointment
            </button>
            {/* </Slide> */}
          </ScrollLink>
        </div>

        <div className="header__card-box">
          <div className="header__card">
            <img src="/images/skill-icons/webflow.png" />
            <p>Webflow Development</p>
          </div>

          <div className="header__card">
            <img src="/images/skill-icons/atom.png" />
            <p>Front-end Development</p>
          </div>
        </div>
      </main>

      <div className="full-name-box">
        {/* <Bounce> */}
        <h2 className="full-name">Aleksandar Ilic</h2>
        {/* </Bounce> */}
      </div>
    </header>
  );
};

export default Header;
