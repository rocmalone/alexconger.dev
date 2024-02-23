import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import FlipCard from "./components/FlipCard.jsx";
import "./App.css";
// import fc from "./flip.module.css";
import Canvas from "./components/Canvas.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [routeHash, setRouteHash] = useState("#home");

  const [scrollTo, setScrollTo] = useState(null);

  const homeDivRef = useRef(null);
  const skillsDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const resumeDivRef = useRef(null);

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
            I love technical discussions, learning new things,<br></br>and I
            believe good engineers ask lots of questions.
          </div>
          <div className="headline" style={{ marginTop: "30px" }}>
            Send me a message — let's solve your problem together.
          </div>
          <div>
            <div className="logos">
              <a
                className="mail-icon"
                href="mailto:aconger00@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="auto"
                  height="auto"
                  fill="#033d9c"
                  class="bi bi-envelope-at-fill mail-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alexconger">
                <img
                  className="linkedin-logo"
                  src="ext-logos/linkedin-logo.png"
                ></img>
              </a>
              <a href="https://www.github.com/rocmalone">
                <img
                  className="github-logo"
                  src="ext-logos/github-logo.svg"
                ></img>
              </a>
            </div>
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
              githubLink: "https://github.com/rocmalone/aipartychat",
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
                "Machine Learning optimized fuel-flow",
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
          <div className="language-container">
            <h2 style={{ marginTop: "0" }}>Languages</h2>
            <div style={{ fontSize: "0.9rem" }}>When I build things I use:</div>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
              <li>SQL</li>
              <li>C++</li>
              <li>Bash Scripts</li>
              <li>MATLAB</li>
            </ul>
          </div>
          {/* <img className="pointer-image" src="pointer.png"></img> */}

          <div
            style={{ marginLeft: "60px" }}
            className="skills-container skills-technology"
          >
            <h2 style={{ marginTop: "0" }}>Technologies</h2>
            <div style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
              I am comfortable using, deploying with, and troubleshooting:
            </div>
            <table border="0">
              <tbody>
                <tr>
                  <td>
                    <div className="title">
                      <b>DATA</b>
                      <div className="bar"></div>
                    </div>
                  </td>
                  <td>PyTorch, pandas, numpy</td>
                </tr>
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
                  <td>Azure, Linux VPS, Containers</td>
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
                  <td>Linux (especially Ubuntu/Debian), Windows</td>
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
      </div>

      <div id="resume" className="page" ref={resumeDivRef}>
        <h1>Resume</h1>
        <p>
          View my resume below, or <a href="Resume.pdf">download</a>.
        </p>
        <iframe
          src="Resume.pdf#zoom=100&navpanes=0&scrollbar=0"
          width="100%"
          height="1190px"
          style={{ marginBottom: "200px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
