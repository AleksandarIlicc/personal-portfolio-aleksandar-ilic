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
    const [showSliderImages, setShowSliderImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const numOfProjects = CardImages.length;

    const getProjectImage = (id) => {
        const imagesToRender = projectImage[id];
        setShowSliderImages([...imagesToRender]);
        setShowPopup(true);
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
                showSliderImages={showSliderImages}
            />

        </section>
    )
}

export default Projects;