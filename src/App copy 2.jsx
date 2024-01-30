import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("#home");
  // These states facilitate the project item animations
  // Set when project item clicked
  const [currentProjectItem, setCurrentProjectItem] = useState(null);
  // Set when the currentProjectItem has begun expanding
  const [expandingProjectItem, setExpandingProjectItem] = useState(null);
  // Set when the currentProjectItem has finished expanding
  const [expandedProjectItem, setExpandedProjectItem] = useState(null);

  useEffect(() => {
    setRouteHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.location.hash = routeHash;
  }, [routeHash]);

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleCurrentProjectItem = (item) => {
    if (currentProjectItem == item) {
      setCurrentProjectItem(null);
      setExpandedProjectItem(null);
      setExpandingProjectItem(null);
      return;
    }
    setCurrentProjectItem(item);
    setTimeout(() => {
      setExpandingProjectItem(item);
    }, 100);
    setTimeout(() => {
      setExpandedProjectItem(item);
    }, 1000);
  };

  const getProjectItemClass = (item) => {
    if (currentProjectItem == item) {
      switch (item) {
        case 1:
          return "current-p-i-1 current-projects-item";
        case 2:
          return "current-p-i-2 current-projects-item";
        case 3:
          return "current-p-i-3 current-projects-item";
        default:
          return "";
      }
    } else if (currentProjectItem) {
      return "hidden-projects-item";
    } else {
      return "projects-item-inactive";
    }
  };

  // Change the justify-content property to make the item stay at its position in the
  // left/center/right when the other items disappear
  const projectItemsWrapperStyle = {
    justifyContent: "space-between",
  };
  if (!expandingProjectItem) {
    projectItemsWrapperStyle.justifyContent = "space-between";
  } else if (expandingProjectItem == 1) {
    projectItemsWrapperStyle.justifyContent = "flex-start";
  } else if (expandingProjectItem == 2) {
    projectItemsWrapperStyle.justifyContent = "center";
  } else if (expandingProjectItem == 3) {
    projectItemsWrapperStyle.justifyContent = "flex-end";
  }

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
          Me
        </Link>
        <Link
          className={
            "nav-link " +
            (routeHash == "#skills"
              ? " nav-link-current"
              : " hover-underline-animation")
          }
          to="skills"
          smooth
          duration={500}
          onClick={() => setRouteHash("#skills")}
        >
          Skills
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
        {/* <img className="suit-image-l" src="suit_cutout_flipped.png"></img> */}
        <div className="headline-container">
          <div className="headline headline-large">Hi. I'm Alex.</div>
          <div className="headline">
            I'm a <b>software developer</b> and <b>mechanical engineer</b>.
          </div>
          <div className="headline">
            I've developed video games, written full-stack web apps,<br></br>
            designed electrical generators, and analyzed aircraft systems.
          </div>
          <div className="headline">
            I love technical discussions and learning new things.
          </div>
          <div className="headline">
            Send me a message - let's solve your problem together.
          </div>
        </div>
        <img className="suit-image" src="suit_cutout.png"></img>
      </div>

      <div id="skills" className="page">
        <div className="headline-container">
          <div className="headline headline-large">My Skills</div>
          <ul>
            <li>JavaScript, TypeScript, Java, C#, C++, Python, SQL</li>
            <li>React</li>
            <li>Angular</li>
            <li>Spring</li>
            <li>Node.js</li>
            <li>SQL (PostgreSQL & MySQL)</li>
            <li>Azure</li>
          </ul>
        </div>
        <img className="pointer-image" src="pointer.png"></img>
      </div>

      <div id="projects" className="page">
        <h1>Projects</h1>
        <div className="project-items-wrapper" style={projectItemsWrapperStyle}>
          {(!expandingProjectItem || expandingProjectItem == 1) && (
            <div
              className={"projects-item p-i-1 " + getProjectItemClass(1)}
              id="p-i-1"
              onClick={() => handleCurrentProjectItem(1)}
              onBlur={() => handleCurrentProjectItem(1)}
            >
              <img src="RatHouseRumble.png"></img>
            </div>
          )}
          {(!expandingProjectItem || expandingProjectItem == 2) && (
            <div
              className={"projects-item p-i-2 " + getProjectItemClass(2)}
              id="p-i-2"
              onClick={() => handleCurrentProjectItem(2)}
              onBlur={() => handleCurrentProjectItem(2)}
            >
              <img src="travel_world.jpg"></img>
              {/* Expanded item content */}
              {/* {expandingProjectItem == 2 && ( */}
              <div className="p-i-expanded-content">
                <h2>Ecommerce Website - Travel World</h2>
              </div>
              {/* )} */}
            </div>
          )}
          {(!expandingProjectItem || expandingProjectItem == 3) && (
            <div
              className={"projects-item p-i-3 " + getProjectItemClass(3)}
              id="p-i-3"
              onClick={() => handleCurrentProjectItem(3)}
              onBlur={() => handleCurrentProjectItem(3)}
            >
              <img src="temp_suit_cutout.png"></img>
            </div>
          )}
        </div>
        {/* <img className="couch-img" src="couch_r.png"></img> */}
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
