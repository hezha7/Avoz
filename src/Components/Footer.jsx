import React from "react";
import facebook from "../assets/Vector.svg";
import instagram from "../assets/instagram.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/baseline-phone.svg";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
function Footer() {
  return (
    <div className="footer">
      <div className="getstart-container">
        <div className="getstart">
          <p className="getstart-title">GET STARTED</p>
          <h2 className="getstart-text">
            It's now time for you to turn your idea into reality
          </h2>
        </div>
        <div className="slide-in_text_btn avozbtn">
          <a href="tel:+9647717569058">
            <button className="footerbtn">Get Started</button>
          </a>
        </div>
      </div>

      <div className="footerContent">
        <div></div>
        <div className="footerAvoz">
          <h1 style={{ backgroundColor: "#507F76" }}>Avoz</h1>
          <div className="slide-in_text_content avozContent">
            <p style={{ backgroundColor: "#507F76" }}>
              More than 5 years of experience in building and growing technology
              in Kurdistan. We offer next generation apps and softwares
            </p>
          </div>
          <div className="slide-in_text_btn btn">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100089025191182"
              style={{ backgroundColor: "#507F76" }}
            >
              <img
                src={facebook}
                alt="facebook"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#507F76",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/avoziq/"
              target="_blank"
              style={{ backgroundColor: "#507F76" }}
            >
              <img
                src={instagram}
                alt="facebook"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#507F76",
                }}
              />
            </a>
          </div>
        </div>

        <div className="footerusfulLinks">
          <h1 style={{ backgroundColor: "#507F76" }}>Useful Links</h1>
          <div className="slide-in_text_btn tabs">
            <Link
              style={{ backgroundColor: "#507F76" }}
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              style={{ backgroundColor: "#507F76" }}
              className="nav-link"
              activeClass="active"
              to="whyus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              style={{ backgroundColor: "#507F76" }}
              className="nav-link"
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </div>
        </div>

        <div className="footerusfulLinks">
          <h1 style={{ backgroundColor: "#507F76" }}>Contact</h1>
          <div className="slide-in_text_btn tabs">
            <a
              target="_blank"
              href="tel:+9647717569058"
              style={{ backgroundColor: "#507F76" }}
            >
              <div className="mail">
                <img
                  src={phone}
                  alt="facebook"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#507F76",
                  }}
                />
                <p style={{ backgroundColor: "#507F76" }}>+964 771 756 9058</p>
              </div>
            </a>
            <a
              href="mailto:info@avoz.krd"
              target="_blank"
              style={{ backgroundColor: "#507F76" }}
            >
              <div className="mail">
                <img
                  src={mail}
                  alt="facebook"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#507F76",
                  }}
                />
                <p style={{ backgroundColor: "#507F76" }}>info@avoz.krd</p>
              </div>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
