import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {

  const [isActive, setIsActive] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setIsActive('#')} className={isActive === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#contact" onClick={()=> setIsActive('#contact')} className={isActive === '#contact' ? 'active' : ''}>
        <BsFillMegaphoneFill />
      </a>

      <a href="#about" onClick={()=> setIsActive('#about')} className={isActive === '#about' ? 'active' : ''}>
        <BiUserCircle />
      </a>
      <a href="#experience" onClick={()=> setIsActive('#experience')} className={isActive === '#experience' ? 'active' : ''}>
        <FaTools />
      </a>
      <a href="#projects" onClick={()=> setIsActive('#projects')} className={isActive === '#projects' ? 'active' : ''}>
        <BsFolderCheck />
      </a>
    </nav>
  );
};

export default Nav;
