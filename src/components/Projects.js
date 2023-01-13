/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, PopUp } from "../components";
import { data } from "../data/projects";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  const [projects] = useState(data);
  const [projectImage, setProjectImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const getProjectImage = (id) => {
    setProjectImage(projects[id].image);
    setShowPopup(true);
  };

  return (
    <section id="section--3" className="projects section">
      <h1 className="heading__secondary--projects centar-text">
        My {projects.length} Projects
      </h1>

      <div className="projects__container mt-large">
        {projects.map((data) => (
          <Zoom>
            <Card key={data.id} data={data} getProjectImage={getProjectImage} />
          </Zoom>
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
