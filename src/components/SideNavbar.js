import { Link as ScrollLink } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import { headerIcons } from "../data/header-icons";

const SideNavbar = () => {
  return (
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
              <Slide cascade={false} direction="down" delay={index * 200}>
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
              </Slide>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideNavbar;
