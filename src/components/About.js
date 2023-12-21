import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import animationAboutSection from "../animation/animation-lottie.json";

const About = () => {
  return (
    <section id="about" className="about section">
      <h1 className="heading__secondary heading__secondary--white centar-text">
        About me
      </h1>

      <div className="about__container container mt-large">
        <div className="about__content">
          <Fade direction="left">
            <div className="paragraph-container">
              <h3 className="heading__tertiary">
                Enhancing Your Online Presence
              </h3>
              <p className="paragraph">
                The primary goal of my services revolves around enhancing and
                optimizing your online presence. Through a dedicated focus on
                harnessing the capabilities of Webflow, I'm committed to
                assisting your business in thriving within the digital sphere.
              </p>
            </div>

            <div className="paragraph-container">
              <h3 className="heading__tertiary">
                Mission: Elevate, Captivate, Streamline
              </h3>
              <p className="paragraph">
                My mission is clear: elevate your brand's visibility, captivate
                your audience, and effortlessly streamline your online
                footprint. By leveraging the versatile tools and capabilities of
                Webflow, I aim to empower your online business, ensuring it
                stands out in the digital competition.
              </p>
            </div>

            <div className="paragraph-container">
              <h3 className="heading__tertiary">
                Crafting a Powerful Online Identity Together
              </h3>
              <p className="paragraph">
                Let's collaborate to craft a compelling online identity that
                resonates deeply with your audience and propels your business
                forward in the dynamic digital landscape.
              </p>
            </div>
          </Fade>
        </div>
        <div>
          <Fade direction="right">
            <Lottie animationData={animationAboutSection} />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
