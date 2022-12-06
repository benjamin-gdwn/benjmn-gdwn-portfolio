import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <h5>Hello I'm</h5>
          <h1 className="name-color">Ben Goodwin</h1>
          <h5 className="text-light">Front End Developer</h5>
          <CTA />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
