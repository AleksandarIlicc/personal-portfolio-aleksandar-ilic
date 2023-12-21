// import { Fade, Bounce } from "react-awesome-reveal";
import { skillIcons } from "../data/skill-icons";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h1 className="heading__secondary heading__secondary--white centar-text">
        My skills
      </h1>

      <div className="container skills__box">
        {skillIcons.map(({ src, alt }, index, icons) => {
          return index === icons.length - 1 ? (
            // <Bounce key={index} right>
            <figure className="skills__img">
              <img src={src} alt={alt} />
            </figure>
          ) : (
            // </Bounce>
            // <Fade key={index} top delay={100 * index}>
            <figure className="skills__img">
              <img src={src} alt={alt} />
            </figure>
            // </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
