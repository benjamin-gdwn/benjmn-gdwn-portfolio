import "./Footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="left-container">
        <a className="footer-icon" href="https:/LinkedIn.com" target="_blank">
          <AiOutlineLinkedin />
        </a>
        <a
          className="footer-icon"
          href="https://github.com/benjamin-gdwn"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="footer-icon"
          href="https://join.slack.com/t/slack-0g85447/shared_invite/zt-1l9o1quo0-edYA7eNpLb9zXYqBMg~UKA"
          target="_blank"
        >
          <AiOutlineSlack />
        </a>
      </div>
      <div className="right-container">
        <h5 className="footer-text">&copy; Benjmn Gdwin</h5>
      </div>
    </footer>
  );
};

export default Footer;
