import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <h1>Technical Skills:</h1>
      <div className="wrapper">
        <h1>I ❤️ the MERN Tech Stack.</h1>

        <div className="mongo">
          <p className="mongo-text">Mongo</p>
        </div>
        <div className="express">
          <p className="express-text">Express</p>
        </div>
        <div className="react">
          <p className="react-text">React</p>
        </div>
        <div className="node">
          <p className="node-text">Node</p>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Resume;
