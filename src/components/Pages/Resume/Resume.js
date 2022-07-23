import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <div className="container">
        <div className="title">
          <h2 className="title-border">
            I'm a <span class="purple-text">Full Stack Web Developer</span> 👩🏼‍💻
          </h2>
          <p className="skills">
            Hover over each image below to see my skills 🛠️
          </p>
          <a
            href="https://drive.google.com/file/d/18o9FE9B3yDK3Am-xczDUo9hprXyTm7RQ/view?usp=sharing"
            target="_blank"
          >
            Or click here to see my resume 📝
          </a>
        </div>
        <div className="container1">
          <div className="circle-title flip-card">
            <div className="full-stack-circle">
              <div className="front-end full-stack-circle-front"></div>
              <div className="full-stack-circle-back">Front End</div>
            </div>
            <span className="badges display-none">
              <object data="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></object>
              <object data="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></object>
              <object data="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></object>
              <object data="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></object>
              <object data="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></object>
            </span>
          </div>
          <div className="circle-title flip-card">
            <div className="full-stack-circle">
              <div className="back-end full-stack-circle-front"></div>
              <div className="full-stack-circle-back">Back End</div>
            </div>
            <span className="badges display-none">
              <object data="https://img.shields.io/badge/Node.JS-%23323330.svg?style=for-the-badge&logo=nodedotjs&logoColor=brightgreen"></object>
              <object data="https://img.shields.io/badge/Express-%23E34F26.svg?style=for-the-badge&logo=express&logoColor=white"></object>
              <object data="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"></object>
            </span>
          </div>
          <div className="circle-title flip-card">
            <div className="full-stack-circle">
              <div className="databases full-stack-circle-front"></div>
              <div className="full-stack-circle-back">Databases</div>
            </div>
            <span className="badges display-none">
              <object data="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></object>
              <object data="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"></object>
              <object data="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"></object>
              <object data="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"></object>
            </span>
          </div>
          <div className="circle-title flip-card">
            <div className="full-stack-circle">
              <div className="devops full-stack-circle-front"></div>
              <div className="full-stack-circle-back">DevOps</div>
            </div>
            <span className="badges display-none">
              <object data="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"></object>
              <object data="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"></object>
              <object data="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"></object>
              <object data="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"></object>
            </span>
          </div>
        </div>
      </div>

      {/* <div className="wrapper">
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
      </div> */}
    </div>
  );
}

export default Resume;
