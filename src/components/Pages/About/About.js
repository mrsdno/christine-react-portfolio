import React from "react";
import "./About.css";
import web2Christine from "../../../assets/img/web2Christine.jpg";
import web3Christine from "../../../assets/img/web3Christine.jpg";

function About() {
  return (
    <div className="teal-background">
      <div className="flex-wrapper">
        <section className="content-card about-me" id="about-me">
          <h2>Hi! I'm Christine Diienno. 👋 </h2>
          <p>
            I am a full-stack web developer who loves cats, Web3, and building
            responsive web applications. I am known for being a decisive leader
            and technical problem solver. I am excited to use my years of
            experience using web applications in a lean manufacturing
            environment to provide a unique perspective to web development.
          </p>
          <br />
        </section>
        <br />
        <section className="photos">
          <img
            src={web2Christine}
            alt="A photo of Christine standing outside"
            className="photo-me"
          />
          <img
            src={web3Christine}
            alt="A photo of Christine standing outside"
            className="photo-me"
          />
        </section>
      </div>
    </div>
  );
}

export default About;
