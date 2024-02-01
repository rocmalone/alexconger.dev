import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./App.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("#home");
  const [selectedHash, setSelectedHash] = useState("#home");
  // These states facilitate the project item animations
  // Set when project item clicked
  const [currentProjectItem, setCurrentProjectItem] = useState(null);
  // Set when the currentProjectItem has begun expanding
  const [expandingProjectItem, setExpandingProjectItem] = useState(null);
  // Set when the currentProjectItem has finished expanding
  const [expandedProjectItem, setExpandedProjectItem] = useState(null);

  const [selectedEdItem, setSelectedEdItem] = useState(null);

  const [scrollTo, setScrollTo] = useState(null);

  const homeDivRef = useRef(null);
  const skillsDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const resumeDivRef = useRef(null);

  useEffect(() => {
    // setRouteHash(window.location.hash);
  }, []);

  // useEffect(() => {
  //   window.location.hash = routeHash;
  // }, [routeHash]);

  // Scroll listener
  const checkIfDivInView = (targetDivRef) => {
    if (targetDivRef.current) {
      const targetDivRect = targetDivRef.current.getBoundingClientRect();
      const isDivInView =
        targetDivRect.top < window.innerHeight && targetDivRect.bottom >= 0;
      // targetDivRect.top < window.innerHeight;
      return isDivInView;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (checkIfDivInView(homeDivRef)) {
        if (scrollTo == "#home") {
          setScrollTo(null);
          setRouteHash("#home");
        } else if (!scrollTo) {
          setRouteHash("#home");
        }
      } else if (checkIfDivInView(skillsDivRef)) {
        if (scrollTo == "#skills") {
          setScrollTo(null);
          setRouteHash("#skills");
        } else if (!scrollTo) {
          setRouteHash("#skills");
        }
      } else if (checkIfDivInView(projectsDivRef)) {
        if (scrollTo == "#projects") {
          setScrollTo(null);
          setRouteHash("#projects");
        } else if (!scrollTo) {
          setRouteHash("#projects");
        }
      } else if (checkIfDivInView(resumeDivRef)) {
        if (scrollTo == "#resume") {
          setScrollTo(null);
          setRouteHash("#resume");
        } else if (!scrollTo) {
          setRouteHash("#resume");
        }
      }
    };

    // Attach the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLinkScroll = (hash, scrollDuration) => {
    console.log("handling link scroll");
    setScrollTo(hash);
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
        <img src="/favicon_large.png"></img>
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
          onClick={() => handleLinkScroll("#home", 500)}
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
          onClick={() => handleLinkScroll("#skills", 500)}
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
          onClick={() => handleLinkScroll("#projects", 500)}
        >
          Projects
        </Link>
        <Link
          className={
            "nav-link" +
            (routeHash == "#resume"
              ? " nav-link-current"
              : " hover-underline-animation")
          }
          to="resume"
          smooth
          duration={500}
          onClick={() => handleLinkScroll("#resume", 500)}
        >
          Resume
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
      <div id="home" className="page" ref={homeDivRef}>
        {/* <Canvas className="suit-smoke-canvas"></Canvas> */}
        {/* <img className="suit-image-l" src="suit_cutout_flipped.png"></img> */}
        <div className="headline-container">
          <h1>Hi. I'm Alex.</h1>
          <div className="headline">
            I'm a <b>software developer</b> and <b>mechanical engineer</b>.
          </div>
          <div className="headline">
            I've developed video games, written full-stack web apps,<br></br>
            designed electrical generators, and analyzed aircraft systems.
          </div>
          <div className="headline">
            I love technical discussions and learning new things,<br></br>and I
            believe good engineers ask lots of questions.
          </div>
          <div className="headline" style={{ marginTop: "30px" }}>
            Send me a message — let's solve your problem together.
          </div>
        </div>
        <img className="suit-image" src="suit_cutout.png"></img>
      </div>
      {/* <img className="skills-bg" src="notebook.png"></img> */}
      <div id="skills" className="page" ref={skillsDivRef}>
        <h1>My Skills</h1>
        <div style={{ display: "flex" }}>
          <div>
            <h2 style={{ marginTop: "0" }}>Languages</h2>
            <div
              style={{
                marginLeft: "1rem",
                minWidth: "200px",
              }}
            >
              <div style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
                <div style={{ marginRight: "1rem" }}>
                  {/* // TODO: Add hover info for GS/h */}
                </div>
                <div style={{ marginRight: "1rem" }}>★☆☆ = Practical</div>
                <div style={{ marginRight: "1rem" }}>★★☆ = Proficient</div>
                <div style={{ marginRight: "1rem" }}>★★★ = Intermediate</div>
              </div>
              <table border="0" style={{}}>
                <tbody>
                  <tr>
                    <td>JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td className="mini-td" style={{ paddingLeft: "1rem" }}>
                      React
                    </td>
                    <td className="mini-td">★★★</td>
                  </tr>
                  <tr>
                    <td className="mini-td" style={{ paddingLeft: "1rem" }}>
                      TypeScript
                    </td>
                    <td className="mini-td">★★☆</td>
                  </tr>
                  <tr>
                    <td className="mini-td" style={{ paddingLeft: "1rem" }}>
                      Angular
                    </td>
                    <td className="mini-td">★★☆</td>
                  </tr>
                  <tr>
                    <td>Java</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>Python</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>C#</td>
                    <td>★★☆</td>
                  </tr>
                  <tr>
                    <td>SQL</td>
                    <td>★★☆</td>
                  </tr>
                  <tr>
                    <td>C++</td>
                    <td>★★☆</td>
                  </tr>
                  <tr>
                    <td>MATLAB</td>
                    <td>★☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <img className="pointer-image" src="pointer.png"></img> */}

          <div
            style={{ marginLeft: "30px" }}
            className="skills-container skills-technology"
          >
            <h2 style={{ marginTop: "0" }}>Technologies</h2>
            <div style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
              I am comfortable using, deploying with, and troubleshooting all of
              the technologies listed here.
            </div>
            <table border="0">
              <tbody>
                <tr>
                  <td>
                    <div className="title">
                      <b>WEB</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>Node.js, React, Angular, Express.js, Spring Boot</td>
                </tr>
                <tr>
                  <td>
                    <div className="title">
                      <b>TEST</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>Seleniuim, JUnit, unittest (python)</td>
                </tr>
                <tr>
                  <td>
                    <div className="title">
                      <b>CLOUD</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>Azure, AWS S3 & EC2 Linux VPS, Containers</td>
                </tr>
                <tr>
                  <td>
                    <div className="title">
                      <b>DATABASE</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>MongoDB, MySQL, PostgreSQL, SQLite</td>
                </tr>
                <tr>
                  <td>
                    <div className="title">
                      <b>OS</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>Ubuntu, Debian, PopOS, Windows</td>
                </tr>
                <tr>
                  <td>
                    <div className="title">
                      <b>OTHER</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>Godot Engine, Unity 3D, BeautifulSoup, Docker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <h2>Personal</h2> */}
      </div>

      <div id="projects" className="page" ref={projectsDivRef}>
        <h1>Projects</h1>
        <div className="project-items-wrapper" style={projectItemsWrapperStyle}>
          {(!expandingProjectItem || expandingProjectItem == 1) && (
            <div
              className={"projects-item p-i-1 " + getProjectItemClass(1)}
              id="p-i-1"
              onMouseEnter={() => handleCurrentProjectItem(1)}
              onMouseLeave={() => handleCurrentProjectItem(1)}
            >
              <img src="RatHouseRumble.png"></img>
            </div>
          )}
          {(!expandingProjectItem || expandingProjectItem == 2) && (
            <div
              className={"projects-item p-i-2 " + getProjectItemClass(2)}
              id="p-i-2"
              onMouseEnter={() => handleCurrentProjectItem(2)}
              onMouseLeave={() => handleCurrentProjectItem(2)}
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
              onMouseEnter={() => handleCurrentProjectItem(3)}
              onMouseLeave={() => handleCurrentProjectItem(3)}
            >
              <img src="temp_suit_cutout.png"></img>
            </div>
          )}
        </div>
      </div>

      <div id="resume" className="page" ref={resumeDivRef}>
        <h1>Resume</h1>
        <div>I'm happy that you're interested in working with me.</div>
      </div>
    </div>
  );
}

export default App;
