import "./Experience.css";
import { HiOutlineCog } from "react-icons/hi";
import { GiMightySpanner } from "react-icons/gi";
const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Skills:</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                {" "}
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiOutlineCog className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Tools Experience</h3>{" "}
          <div className="experience__content">
            <article className="experience__details">
              <GiMightySpanner className="experience__details-icon" />
              <div>
                <h4>Git &amp; GitHub</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMightySpanner className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMightySpanner className="experience__details-icon" />
              <div>
                <h4>Photoshop</h4>
                <small className="light-text">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMightySpanner className="experience__details-icon" />
              <div>
                <h4>VSCode &amp; IDE's</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMightySpanner className="experience__details-icon" />
              <div>
                <h4>Dev Tools</h4>
                <small className="light-text">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// VSCode
// Git & GitHub
// CodeSandbox
// Photoshop
// Figma
// Terminal
// Dev Tools
