import React from 'react'

const Card = ({ data, getProjectImage }) => {
    return (
        <div className="card" key={data.id}>
            <div className="card__side card__side--front">
                <figure className="card__img">
                    <img src={data.image} alt={data.title} />
                </figure>
                <div className="card__content">
                    <h3 className="heading__tertiary">{data.title}</h3>
                    <p className="card__para">{data.date}</p>
                </div>
            </div>
            <div className="card__side card__side--back">
                <p className="card__click">
                    Click to discover more about site. Look at code of project on
                    &nbsp;<a href={data.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                    &nbsp;
                    or
                    &nbsp;<a href={data.netlifyLink} target="_blank" rel="noreferrer"> visit website.</a>
                </p>
                <button className="btn btn__card" id={data.id} onClick={() => getProjectImage(data.id)}>Click to view</button>
            </div>
        </div>
    )
}

export default Card