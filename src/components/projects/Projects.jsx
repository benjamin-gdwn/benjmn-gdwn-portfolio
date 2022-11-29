import "./Projects.css";
import Guess from "../../assets/guess-the-word.png";
import Repo from "../../assets/github-repo.png";
import Drum from "../../assets/js-drunmkit.png";
import Sticky from "../../assets/sticky-note.png";
import Unplugged from "../../assets/unplugged.png";
import Food from "../../assets/food-order-app.png";
import ProjectTemplate from "./ProjectTemplate";


const project_data = [
  {
    id: 1,
    title: "Guess The Word",
    skills: "Javascript, HTMl, CSS, RestAPI",
    image: Guess,
    url: "https://github.com/benjamin-gdwn/guess-the-word",
    liveUrl: "https://benjamin-gdwn.github.io/guess-the-word/",
  },
  {
    id: 2,
    title: "Unplugged Retreat",
    skills: "HTMl, CSS, Responsive Web Design",
    image: Unplugged,
    url: "https://github.com/benjamin-gdwn/unplugged-retreat",
    liveUrl: "https://benjamin-gdwn.github.io/unplugged-retreat/",
  },
  {
    id: 3,
    title: "Food Order App",
    skills: "React, API, Firebase, Redux",
    image: Food,
    url: "https://github.com/benjamin-gdwn/food-order-app",
    liveUrl: "https://github.com/benjamin-gdwn/food-order-app",
  },
  {
    id: 4,
    title: "Sticky Note App",
    skills: "React, API, JSX, CSS",
    image: Sticky,
    url: "https://github.com/benjamin-gdwn/sticky-note",
    liveUrl: "https://benjamin-gdwn.github.io/sticky-note/",
  },
  {
    id: 5,
    title: "GitHub Repo",
    skills: "React, API, JSX, CSS",
    image: Repo,
    url: "https://github.com/benjamin-gdwn/github-repo-gallery",
    liveUrl: "https://benjamin-gdwn.github.io/github-repo-gallery/",
  },
];
const Projects = () => {
  const projectList = project_data.map((project) => (
    <ProjectTemplate
      key={project.id}
      project={project_data.title}
      title={project.title}
      skills={project.skills}
      image={project.image}
      url={project.url}
      liveUrl={project.liveUrl}
    />
  ));

  
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
      {projectList}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Projects;
