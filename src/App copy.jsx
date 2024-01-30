import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("#home");
  const [projectItemFocus, setProjectItemFocus] = useState(null);
  const [currentProjectItem, setCurrentProjectItem] = useState(null);
  const [expandedProjectItem, setExpandedProjectItem] = useState(null);
  const [canChangeProjectItem, setCanChangeProjectItem] = useState(true);

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

  const handleCurrentProjectItem = (item) => {
    if (currentProjectItem == item) {
      setCurrentProjectItem(null);
      setExpandedProjectItem(null);
      return;
    }
    setCurrentProjectItem(item);
    setTimeout(() => {
      setExpandedProjectItem(item);
    }, 300);
  };

  const getProjectClassName = (item) => {
    if (currentProjectItem == item) {
      return "current-projects-item";
    } else if (currentProjectItem) {
      return "hidden-projects-item";
    } else {
      return "";
    }
  };

  return (
    <div className="content">
      <div className="nav">
        <img src="/favicon.svg"></img>
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
        <div className="project-items-wrapper">
          {/* If there is a project item, only render the one that is currently selected */}
          {(!expandedProjectItem || expandedProjectItem == 1) && (
            <div
              className={"projects-item p-i-1 " + getProjectClassName(1)}
              id="p-i-1"
              onClick={() => handleCurrentProjectItem(1)}
              onBlur={() => handleCurrentProjectItem(1)}
            >
              <img src="RatHouseRumble.png"></img>
              {/* {currentProjectItem == 1 && <div>test extra</div>} */}
            </div>
          )}

          {(!expandedProjectItem || expandedProjectItem == 2) && (
            <div
              className={"projects-item p-i-2 " + getProjectClassName(2)}
              id="p-i-2"
              onClick={() => handleCurrentProjectItem(2)}
              onBlur={() => handleCurrentProjectItem(2)}
            >
              <img src="travel_world.jpg"></img>
            </div>
          )}

          {(!expandedProjectItem || expandedProjectItem == 3) && (
            <div
              className={"projects-item p-i-3 " + getProjectClassName(3)}
              id="p-i-3"
              onClick={() => handleCurrentProjectItem(3)}
              onBlur={() => handleCurrentProjectItem(3)}
            >
              <img src="temp_suit_cutout.png"></img>
            </div>
          )}
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
    </div>
  );
}

export default App;
