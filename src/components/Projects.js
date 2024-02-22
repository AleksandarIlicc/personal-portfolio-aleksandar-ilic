import { useState } from "react";
import { Card, PopUp } from "../components";
import { data } from "../data/projects";
import { Zoom } from "react-awesome-reveal";

const projectMenu = [
  {
    text: "All",
  },
  {
    text: "React",
  },
  {
    text: "Angular",
  },
  {
    text: "Webflow",
  },
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [projectImage, setProjectImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const getProjectImage = (index) => {
    setProjectImage(data[index].image);
    setShowPopup(true);
  };

  const filterProjects = (type) => {
    const lowerCaseType = type.toLowerCase();

    if (lowerCaseType === "all") {
      setFilteredProjects(data);
    } else {
      const projects = data.filter((project) => project.type === lowerCaseType);
      setFilteredProjects(projects);
    }
  };

  return (
    <section id="projects" className="projects section">
      <h1 className="heading__secondary--white centar-text">Projects</h1>

      <div className="projects__menu mt-[3rem]">
        <ul className="flex flex-wrap gap-x-24">
          {projectMenu.map((item, index) => (
            <li key={index} onClick={() => filterProjects(item.text)}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="projects__container mt-large">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((data, index) => (
            <Zoom key={data.id}>
              <Card
                data={data}
                index={index}
                getProjectImage={getProjectImage}
              />
            </Zoom>
          ))
        ) : (
          <p className="flex justify-center py-[2rem] font-semibold rounded-2xl text-[#0b63b0] bg-[#b0daff]">
            Has no project for this skill.
          </p>
        )}
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
