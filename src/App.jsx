import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";


function App() {
  const [scrollPosition, setScrollPosition] = useState();
 const wheelHandler = (e) => {
  setScrollPosition(window.scrollY);
 }
  return (
    <div className="App" onWheel={wheelHandler}>
      <Header  />
      <Nav scrollPosition={scrollPosition}/>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
