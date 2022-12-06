import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Nav = (props) => {
  const [isActive, setIsActive] = useState("#");

  const userPosition = props.scrollPosition;

  useEffect(() => {
    if (userPosition > 480 && userPosition < 1320) {
      setIsActive("#about");
    } else if (userPosition > 1321 && userPosition < 2110) {
      setIsActive("#experience");
    } else if (userPosition > 2111 && userPosition < 2715) {
      setIsActive("#projects");
    } else if (userPosition > 2716) {
      setIsActive("#contact");
    } else {
      setIsActive("#");
    }
  }, [userPosition]);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setIsActive("#")}
        className={isActive === "#" ? "active" : ""}
      >
        <AiOutlineHome />
        Home
      </a>

      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isActive === "#about" ? "active" : ""}
      >
        <BiUserCircle />
        About
      </a>
      <a
        href="#experience"
        onClick={() => setIsActive("#experience")}
        className={isActive === "#experience" ? "active" : ""}
      >
        <FaTools />
        Tools
      </a>
      <a
        href="#projects"
        onClick={() => setIsActive("#projects")}
        className={isActive === "#projects" ? "active" : ""}
      >
        <BsFolderCheck />
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("#contact")}
        className={isActive === "#contact" ? "active" : ""}
      >
        <BsFillMegaphoneFill />
        Contact
      </a>
    </nav>
  );
};

export default Nav;
