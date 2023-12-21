const Card = ({ data, index, getProjectImage }) => {
  return (
    <div className="card">
      <div
        className={`card__side card__side--front card__side--front--${data.colorNumber}`}
      >
        {data?.inProgress && (
          <div className="ribbon">
            <span>IN PROGRESS</span>
          </div>
        )}
        <figure className="card__img">
          <img src={data.image} alt={data.title} />
        </figure>

        <div className="card__content">
          <h3 className="heading__tertiary">
            {data.title.length > 20
              ? data.title.substr(0, 20) + "..."
              : data.title}
          </h3>
          <p className="card__date">{data.date}</p>
          <div>
            {data.technologies.map((tech, index) => (
              <span key={index} className="card__tech">
                {index === tech.length - 1 ? tech + "." : tech + ","} {""}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card__side card__side--back">
        <p className="card__click">
          Click to discover more about project. Look at code of project on
          &nbsp;
          <a href={data.githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
          &nbsp; or &nbsp;
          <a href={data.netlifyLink} target="_blank" rel="noreferrer">
            {" "}
            visit project.
          </a>
        </p>
        <button
          className="btn btn__card"
          id={data.id}
          onClick={() => getProjectImage(index)}
        >
          Click to view
        </button>
      </div>
    </div>
  );
};

export default Card;
