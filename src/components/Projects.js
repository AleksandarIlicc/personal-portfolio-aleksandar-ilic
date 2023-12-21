import { useState } from "react";
import { Card, PopUp } from "../components";
import { data } from "../data/projects";
// import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  const [projects] = useState(data);
  const [projectImage, setProjectImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const getProjectImage = (index) => {
    setProjectImage(projects[index].image);
    setShowPopup(true);
  };

  return (
    <section id="projects" className="projects section">
      <h1 className="heading__secondary--white centar-text">Projects</h1>

      <div className="projects__container mt-large">
        {projects.map((data, index) => (
          // <Zoom key={data.id}>
          <Card data={data} index={index} getProjectImage={getProjectImage} />
          // </Zoom>
        ))}
      </div>

      <PopUp
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        projectImage={projectImage}
      />
    </section>
  );
};

export default Projects;
