import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";
import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https:/LinkedIn.com" target="_blank">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/benjamin-gdwn" target="_blank">
        <FaGithubSquare />
      </a>
      <a
        href="https://join.slack.com/t/slack-0g85447/shared_invite/zt-1l9o1quo0-edYA7eNpLb9zXYqBMg~UKA"
        target="_blank"
      >
        <AiOutlineSlack />
      </a>
    </div>
  );
};

export default HeaderSocials;
