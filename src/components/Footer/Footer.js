import React from "react";
import "./Footer.css";
import email from "../../assets/img/email.svg";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.svg";

function Footer() {
  return (
    <section className="text-center yellow-background">
      <div className="flex-wrapper contact-links">
        <a href="mailto:christine@dno.dev" alt="">
          <img src={email} alt="email icon" className="email-img" />
          <h3>Email Me</h3>
        </a>
        <a href="https://github.com/mrsdno" alt="">
          <img src={github} alt="github icon" className="github-img" />
          <h3>Github</h3>
        </a>
        <a href="" alt="">
          <img src={linkedin} alt="LinkedIn Logo" className="DNO-img" />
          <h3>Linkedin</h3>
        </a>
      </div>
    </section>
  );
}

export default Footer;
