import React from "react";
import "./Nav.css";
import logo from "../../assets/img/logo.jpg";

function Nav() {
  return (
    <header>
      <img src={logo} alt="dno logo" />
      <nav>
        <ul>
          <li>
            <a href="#about-me">Learn About Me</a>
          </li>
          <li>
            <a href="#portfolio">Check Out My Portfolio</a>
          </li>
          <li>
            <a href="#contact-me">Get In Touch With Me</a>
          </li>
          <li>
            <a href="#contact-me">See My Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
