import { Link as ScrollLink } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import SideNavbar from "./SideNavbar";

const Header = () => {
  return (
    <header id="home" className="header">
      <SideNavbar />

      <main className="header__main">
        <div>
          <Slide direction="down">
            <h1 className="heading__primary">
              Grow your online business presence with Webflow.
            </h1>
          </Slide>

          <Slide direction="down">
            <p className="header__text">
              Enhance your digital footprint and expand your online business
              effortlessly through the power of <span>Webflow</span>. Elevate
              your brand's visibility, captivate your audience, and{" "}
              <span>streamline your online presence.</span>
            </p>
          </Slide>

          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Slide>
              <button className="btn btn__book" href="contact">
                Book an Appointment
              </button>
            </Slide>
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
    </header>
  );
};

export default Header;
