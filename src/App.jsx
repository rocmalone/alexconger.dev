import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("");
  const [projectItemFocus, setProjectItemFocus] = useState(null);

  useEffect(() => {
    setRouteHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.location.hash = routeHash;
  }, [routeHash]);

  const clickNavLink = (to) => {};

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

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
        <img className="suit-image" src="temp_suit_cutout.png"></img>
        <div className="headline-container">
          <div className="headline headline-large">Hi. I'm Alex.</div>
          <div className="headline">
            I'm a <b>software developer</b> and <b>mechanical engineer</b>.
          </div>
          <div className="headline">
            Send me a message - let's solve your problem together.
          </div>
        </div>
      </div>
      <div id="projects" className="page">
        <div className="projects-wrapper">
          <div
            className="projects-item p-i-1"
            onClick={() =>
              openLinkInNewTab("https://rocmalone.itch.io/rat-house-rumble")
            }
          >
            <img src="RatHouseRumble.png"></img>
          </div>
        </div>
        <img className="couch-img" src="couch_r.png"></img>
        {/* <div className="smoke-wrapper">
          <div className="smoke-container">
            <div className="smoke-content">
              list of projects list of projects
            </div>
            <div className="smoke-canvas-container">
              <Canvas id="canvas" className="smoke-canvas"></Canvas>
            </div>
          </div>
        </div> */}
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
