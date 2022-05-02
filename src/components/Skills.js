import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
    return (
        <section id="section--2" className="skills section">

            <h1 className="heading__secondary centar-text">My skills</h1>

            <div className="skills__box">
                <Fade top delay={100}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt='html5' />
                    </figure>
                </Fade>
                <Fade top delay={150}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/css3.png" alt='css3' />
                    </figure>
                </Fade>
                <Fade top delay={200}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/sass.png" alt='sass' />
                    </figure>
                </Fade>
                <Fade top delay={250}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt='javascript' />
                    </figure>
                </Fade>
                <Fade top delay={300}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" alt='react js' />
                    </figure>
                </Fade>
                <Fade top delay={350}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/npm.png" alt='npm' />
                    </figure>
                </Fade>
                <Fade top delay={400}>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/color/96/000000/git.png" alt='git' />
                    </figure>
                </Fade>
                <Bounce right>
                    <figure className="skills__img">
                        <img src="https://img.icons8.com/material-outlined/96/000000/github.png" alt='github' />
                    </figure>
                </Bounce>
            </div>
        </section>
    )
}

export default Skills;