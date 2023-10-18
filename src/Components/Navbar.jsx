import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../assets/logo.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link
        className="nav-link"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={showNavbar}
      >
        <div className="logo">
          <div style={{ width: "50px", height: "50px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
      </Link>
      <nav ref={navRef}>
        <div></div>
        <div>
          <Link
            className="nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNavbar}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="whyus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNavbar}
          >
            About
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNavbar}
          >
            Services
          </Link>
        </div>
        <div>
          <a href="tel:+9647717569058">
            <button className="hireUsBtn">Hire us</button>
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
