/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PopUp from './PopUp';
import cardImages from '../Arrays/images/CardImages';
import projectImages from '../Arrays/images/ProjectImages';
import Card from './Card';
import CardImages from '../Arrays/images/CardImages';
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
    const [projectArr, setProjectArr] = useState(cardImages);
    const [projectImage, setProjectImage] = useState(projectImages)
    const [showGalleryImages, setShowGalleryImages] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const numOfProjects = CardImages.length;

    const getProjectImage = (id) => {
        setShowGalleryImages([...projectImages[id]]);
        setShowPopup(true);
        const arrProjectName = cardImages.map(obj => obj.title);
        setProjectName([...arrProjectName[id]]);
        return;
    }

    return (
        <section id="section--3" className="projects section">

            <h1 className="heading__secondary--projects centar-text">My {numOfProjects} Projects</h1>

            <div className="projects__container mt-large">
                {
                    projectArr.map(data => (
                        <Zoom>
                            <Card
                                data={data}
                                getProjectImage={getProjectImage}
                            />
                        </Zoom>
                    ))
                }
            </div>

            <PopUp
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                showGalleryImages={showGalleryImages}
                projectName={projectName}
            />

        </section>
    )
}

export default Projects;