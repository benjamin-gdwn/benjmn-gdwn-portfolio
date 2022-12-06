import "./About.css";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import ME from "../../assets/profile.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineDesktopComputer />
              <h5>Hobbies</h5>
              <small>Running, Yoga, Long Walks, Playing Music</small>
            </article>
            <article className="about__card">
              <FaTools />
              <h5>Characteristics</h5>
              <small>
                Hard-Working, Process-Driven, Goal and Detail Oriented
              </small>
            </article>
            <article className="about__card">
              <MdOutlineSchool />
              <h5>Projects</h5>
              <small>
                Over 20 projects completed, Wes Bos' JS 30 for 30 completed,
                currently working on a chatroom SPA
              </small>
            </article>
          </div>
          <p className="intro">
            Having worked in hospitality and catering for 15 years I decided I
            needed a change. Something structural and process related still but
            something that can challenge my creative skills. This coincided with
            a fairly traumatic period in my life which gave me huge motivation
            to go ahead and achieve more. So, here I am. 18 months down the line
            and with good experience of HTML, CSS &amp; JavaScript, React and
            continuously learning more. I have 3 children (between 3 & 11 years
            old), a 7 year old Great Dane and a lovely wife who hates cooking,
            which is great because I love it! Get in contact and I'll share some
            of my favourite recipes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
