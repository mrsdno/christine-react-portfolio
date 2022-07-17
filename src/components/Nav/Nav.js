import React from "react";
import "./Nav.css";
import logo from "../../assets/img/logo.jpg";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <img src={logo} alt="dno logo" />
      <nav>
        <ul>
          <li>
            <a href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Learn About Me</a>
          </li>
          <li>
            <a href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Check Out My Portfolio</a>
          </li>
          <li>
            <a href="#contact-me"
              onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Get In Touch With Me</a>
          </li>
          <li>
            <a href="#resume"
              onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>See My Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default Nav;
