import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section id="section--1" className="about section">
      <h1 className="heading__secondary centar-text">About me</h1>

      <div className="about__container mt-large">
        <Fade left>
          <div className="about__col--1">
            <p className="paragraph">
              Hello! My name is <strong>Aleksandar</strong>, and I'm a frontend
              developer based in Nis, Serbia. I specialize in creating
              outstanding websites for amazing people.
            </p>

            <p className="paragraph">
              I have a strong command of <span className="html">HTML</span>, ,{" "}
              <span className="css">CSS</span> and{" "}
              <span className="java">Java</span>
              <span className="script">Script</span>, and I thoroughly enjoy UI
              development. Taking complex problems and transforming them into
              simple and elegant interface designs is something I find truly
              rewarding. Whether I'm working with{" "}
              <span className="html">HTML</span>,{" "}
              <span className="css">CSS</span> or
              <span className="java">Java</span>
              <span className="script">Script</span>, I always strive to write
              clean, efficient, and well-structured code.
            </p>

            <p className="paragraph">
              In addition to my core skills, I also leverage advanced
              technologies to enhance my work and deliver exceptional user
              experiences. Some of these technologies include:{" "}
              <span className="technologies">
                Sass, Tailwind CSS, Angular, TypeScript, Firebase.
              </span>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="about__col--2">
            <figure>
              <img src="/images/about-img.png" alt="about" />
            </figure>

            <p className="paragraph mt-medium">
              When I am not coding, I am either playing video games, football or
              watching a movies. Other times I am reading or learning a new
              stuff about coding.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
