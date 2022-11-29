import "./Projects.css";
const ProjectTemplate = (props) => {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={props.image}
        alt={`props.title Landing Page`} />
      </div>
      <h3>{props.title}</h3>
      <small className="project__tools">{props.skills}</small>
      <div className="portfolio__item-cta">
        <a href={props.url} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={props.liveUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default ProjectTemplate;
