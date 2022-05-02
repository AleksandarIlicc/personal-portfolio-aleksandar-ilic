import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="section--1" className="about section">

            <h1 className="heading__secondary centar-text">About me</h1>

            <div className="about__container mt-large">
                <Fade left>
                    <div className="about__col--1">
                        <p className="paragraph">
                            Hi! My name is <strong>Aleksandar</strong>, I'm a frontend developer based in Nis, Serbia.
                            And I make awesome things for awesome people.
                        </p>

                        <p className="paragraph">
                            I develop websites with <span className="html">HTML</span>, <span className="css">CSS</span> and <span
                                className="java">Java</span><span className="script">Script</span>.
                            UI development is the most enjoyable part for me.
                            I love taking complex problems and turning them into simple and beautiful interface design.
                            I also love the logic and structure of coding and always strive to write elegant
                            and efficient code whether it be <span className="html">HTML</span>, <span className="css">CSS</span> or
                            <span className="java">Java</span><span className="script">Script</span>.
                        </p>

                        <p className="paragraph">
                            When I am not coding, I am either playing video games, football or watching a movies.
                            Other times I am reading or learning a new stuff about coding.
                        </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="about__col--2">
                        <img src="/images/about-img.png" alt="about" />
                    </div>
                </Fade>
            </div>

        </section>
    )
}

export default About;