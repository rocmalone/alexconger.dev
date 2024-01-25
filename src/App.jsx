import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("");

  useEffect(() => {
    setRouteHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.location.hash = routeHash;
  }, [routeHash]);

  const clickNavLink = (to) => {};
  return (
    <>
      <div className="nav">
        <Link
          className={
            "nav-link " +
            (routeHash == "#home"
              ? " nav-link-current"
              : " hover-underline-animation")
          }
          to="home"
          smooth
          duration={500}
          onClick={() => setRouteHash("#home")}
        >
          Home
        </Link>
        <Link
          className={
            "nav-link" +
            (routeHash == "#projects"
              ? " nav-link-current"
              : " hover-underline-animation")
          }
          to="projects"
          smooth
          duration={500}
          onClick={() => setRouteHash("#projects")}
        >
          Projects
        </Link>
        <Link
          className={
            "nav-link" +
            (routeHash == "#education"
              ? " nav-link-current"
              : " hover-underline-animation")
          }
          to="education"
          smooth
          duration={500}
          onClick={() => setRouteHash("#education")}
        >
          Education
        </Link>
        {/* <Link
          className={
            "nav-link" + (routeHash == "#skills" ? " nav-link-current" : "")
          }
          to="skills"
          smooth
          duration={500}
          onClick={setRouteHash("#skills")}
        >
          Skills
        </Link>
        <Link
          className={
            "nav-link" + (routeHash == "#contact" ? " nav-link-current" : "")
          }
          to="contact"
          smooth
          duration={500}
          onClick={setRouteHash("#home")}
        >
          Contact
        </Link> */}
      </div>
      <div id="home" className="page">
        {/* <Canvas className="suit-smoke-canvas"></Canvas> */}
        <img className="suit-image" src="temp_suit.PNG"></img>
        <div className="headline-container">
          <div className="headline headline-large">Hi. I'm Alex.</div>
          <div className="headline">
            I'm a software developer & mechanical engineer.
          </div>
          <div className="headline">
            Send me a message, let's solve your problems together.
          </div>
        </div>
      </div>
      <div id="projects" className="page">
        <div className="projects-wrapper">
          <div className="projects-item">
            <img src="RatHouseRumble.png"></img>
            <p>Test</p>
          </div>
        </div>
        <div className="smoke-wrapper">
          <div className="smoke-container">
            <div className="smoke-content">
              list of projects list of projects
            </div>
            <div className="smoke-canvas-container">
              <Canvas id="canvas" className="smoke-canvas"></Canvas>
            </div>
          </div>
        </div>
        projects
      </div>
      <div id="education" className="page">
        education
      </div>
      <div id="skills" className="page">
        skills
      </div>
      <div id="contact" className="page">
        contact
      </div>
    </>
  );
}

export default App;
