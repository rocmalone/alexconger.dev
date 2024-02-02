import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import FlipCard from "./components/FlipCard.jsx";
import "./App.css";
// import fc from "./flip.module.css";
import Canvas from "./components/Canvas.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("#home");

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
        targetDivRect.top < window.innerHeight && targetDivRect.bottom >= 300;
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
      } else if (checkIfDivInView(projectsDivRef)) {
        if (scrollTo == "#projects") {
          setScrollTo(null);
          setRouteHash("#projects");
        } else if (!scrollTo) {
          setRouteHash("#projects");
        }
      } else if (checkIfDivInView(skillsDivRef)) {
        if (scrollTo == "#skills") {
          setScrollTo(null);
          setRouteHash("#skills");
        } else if (!scrollTo) {
          setRouteHash("#skills");
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

  const handleLinkScroll = (hash, scrollDuration) => {
    console.log("handling link scroll");
    setScrollTo(hash);
  };

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
          onClick={() => handleLinkScroll("#projects", 500)}
        >
          Projects
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

      <div id="projects" className="page" ref={projectsDivRef}>
        <h1>Projects</h1>
        <div className="project-items-wrapper">
          <FlipCard
            content={{
              image: "/projects/RatHouseRumble2.jpg",
              icon: "/projects/RatHouseRumble-icon.png",
              backHeading: "Rat House Rumble",
              backSubHeading: "Multiplayer FPS Video Game",
              tech: "GDScript (Pythonic), C#, Godot Engine",
              features: [
                "Completely 3D-scanned world",
                "Composition architecture",
                "Observer & singleton design patterns",
              ],
              link: "https://rocmalone.itch.io/rat-house-rumble",
              githubLink: "https://github.com/rocmalone/rat-house-rumble",
            }}
          ></FlipCard>
          <FlipCard
            content={{
              image: "/projects/TravelWorld.jpg",
              backHeading: "Travel World Store",
              backSubHeading: "Full-Stack eCommerce Site",
              icon: "/projects/TravelWorld-icon.svg",
              tech: "Angular, Spring, MySQL, Docker, Azure",
              backText: "A video game.",
              features: [
                "Multi-stage purchase flow, cart, order tracking, and validation",
                "Model-View-Controller & RESTful API",
              ],
              link: "https://alexconger.dev/travelworld/#/vacation",
              githubLink: "https://github.com/rocmalone/travel-world-ecommerce",
            }}
          ></FlipCard>
        </div>
        <div className="project-items-wrapper">
          <FlipCard
            content={{
              image: "/projects/Deathroll.jpg",
              backHeading: "Deathroll.online",
              backSubHeading: "Online AI Interaction Game",
              icon: "/projects/Deathroll-icon.svg",
              tech: "React, Express.js, ChatGPT API",
              backText: "A video game.",
              features: [
                "World of Warcraft Deathroll against AI",
                "Express.js backend with RESTful API",
                "Queue structure & API adapter",
              ],
              link: "https://deathroll.online/",
              githubLink: "test",
            }}
          ></FlipCard>
          <FlipCard
            content={{
              image: "/projects/Thermoelectric.jpg",
              backHeading: "Electric Generator",
              backSubHeading: "Embedded Control System",
              icon: "/projects/Thermoelectric-icon.png",
              tech: "C++, Arduino UNO (ATMEGA328P)",
              features: [
                "Dynamic response to thermal sensors",
                "Modulate fuel and active cooling",
                "Fault detection & operational validation to prevent thermal runaway",
                "Adapter design pattern",
              ],
            }}
          ></FlipCard>
        </div>
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
              {/* <div style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
                <div style={{ marginRight: "1rem" }}>
                </div>
                <div style={{ marginRight: "1rem" }}>★☆☆ = Practical</div>
                <div style={{ marginRight: "1rem" }}>★★☆ = Proficient</div>
                <div style={{ marginRight: "1rem" }}>★★★ = Intermediate</div>
              </div> */}
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
                  <td>Azure, AWS, Linux VPS, Containers</td>
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

      <div id="resume" className="page" ref={resumeDivRef}>
        <h1>Resume</h1>
        <div>I'm happy that you're interested in working with me.</div>
      </div>
    </div>
  );
}

export default App;
