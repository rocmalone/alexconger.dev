import style from "./NavBar.module.css";
import { Link } from "react-scroll";

function NavBar({ handleLinkScroll }) {
  return (
    <details>
      <summary></summary>
      <nav className={style.menu}>
        {/* <a className={style.navLink} href="#home">
          Home
        </a>
        <a className={style.navLink} href="#projects">
          Projects
        </a>
        <a className={style.navLink} href="#skills">
          Skills
        </a>
        <a className={style.navLink} href="#resume">
          Resume
        </a>
        <a className={style.navLink} href="#link">
          About
        </a> */}
        <Link
          className={style.navLink}
          to="home"
          smooth
          duration={500}
          onClick={() => handleLinkScroll("#home", 500)}
        >
          Home
        </Link>
        <Link
          className={style.navLink}
          to="projects"
          smooth
          duration={500}
          onClick={() => handleLinkScroll("#projects", 500)}
        >
          Projects
        </Link>
        <Link
          className={style.navLink}
          to="skills"
          smooth
          duration={500}
          onClick={() => handleLinkScroll("#skills", 500)}
        >
          Skills
        </Link>
        <Link
          className={style.navLink}
          to="resume"
          smooth
          duration={500}
          onClick={() => handleLinkScroll("#resume", 500)}
        >
          Resume
        </Link>
      </nav>
    </details>
  );
}

export default NavBar;
