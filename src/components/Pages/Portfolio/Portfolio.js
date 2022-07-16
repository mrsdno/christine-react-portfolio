import React from "react";
import "./Portfolio.css";
import javascriptQuiz from '../../../assets/img/projects/javascript-quiz.png';
import weatherDashboard from "../../../assets/img/projects/weather-dashboard.png";
import taskinator from "../../../assets/img/projects/taskinator.png";
import passwordGenerator from "../../../assets/img/projects/password-generator.png";

function Portfolio() {
    return (
      <section className="text-center">
        <h2 className="portfolio" id="portfolio">
          Check Out My Portfolio
        </h2>

        <article className="project">
          <div className="portfolio-content yellow-background">
            <h3>Pokemon Team Builder</h3>
            <p>
              A web application that can be used to build your Pokemon team! The
              webpage will display the original 150 pokemon and allow a user to
              add them to their team.
            </p>
            <a
              href="https://best-team-pokemon-team-builder.herokuapp.com/"
              target="_blank"
            >
              Deployed Site
            </a>{" "}
            <a
              href="https://github.com/mlarkin14/pokemon-team-builder"
              target="_blank"
            >
              Github Repository
            </a>
          </div>
          <div className="portfolio-img">
            <a
              href="https://best-team-pokemon-team-builder.herokuapp.com/"
              target="_blank"
            >
              <img src="https://user-images.githubusercontent.com/100256384/173465974-6a97aa6d-c433-42bf-a2ba-6fa00acb9cba.png" />
            </a>
          </div>
        </article>

        <article className="project">
          <div className="portfolio-img">
            <a
              href="https://mrsdno.github.io/weather-dashboard/"
              target="_blank"
            >
              <img
                src={weatherDashboard}
                alt="A screenshot of the weather dashboard site."
              />
            </a>
          </div>
          <div className="portfolio-content red-background">
            <h3>Weather Dashboard</h3>
            <p>
              This application was made for users who want to be able to view
              the current and future weather conditions of multiple cities so
              they can plan their trip accordingly. To use this application,
              simply search the city you are interested in. The application then
              fetches information from OpenWeather API and parses the data tod
              display the current and future weather conditions. This
              application was made using HTML, CSS (bootstrap), and javascript.
            </p>
            <a
              href="https://mrsdno.github.io/weather-dashboard/"
              target="_blank"
            >
              Deployed Site
            </a>{" "}
            <a
              href="https://github.com/mrsdno/weather-dashboard"
              target="_blank"
            >
              Github Repository
            </a>
          </div>
        </article>

        <article className="project">
          <div className="portfolio-content purple-background">
            <h3>Taskinator</h3>
            <p>
              A web application that can be used for task manangement.This site
              uses HTML, CSS and JavaScript to make a simple kanban board. This
              can be used by an individual or by a team to manage tasks.
            </p>
            <a href="https://mrsdno.github.io/taskinator/" target="_blank">
              Deployed Site
            </a>{" "}
            <a href="https://github.com/mrsdno/taskinator" target="_blank">
              Github Repository
            </a>
          </div>
          <div className="portfolio-img">
            <a href="https://mrsdno.github.io/taskinator" target="_blank">
              <img src={taskinator} />
            </a>
          </div>
        </article>

        <article className="project">
          <div className="portfolio-img">
            <a href="https://mrsdno.github.io/javascript-quiz/" target="_blank">
              <img src={javascriptQuiz} />
            </a>
          </div>
          <div className="portfolio-content black-background">
            <h3>Javascript Quiz</h3>
            <p>
              This is a timed quiz that tests your knowledge on javascript. To
              get the high score, you must end the quiz with the most time
              remaining. Press "Start" to begin the quiz. Then the timer starts.
              You have one minute to answer the 5 quiz questions. Each time you
              get an answer wrong, you lose 5 seconds off the clock! When you
              get the end of the quiz, if you get the high score you will be
              asked to enter you initals and save the high score.
            </p>
            <a href="https://mrsdno.github.io/javascript-quiz/" target="_blank">
              Deployed Site
            </a>{" "}
            <a href="https://github.com/mrsdno/javascript-quiz" target="_blank">
              Github Repository
            </a>
          </div>
        </article>

        <article className="project">
          <div className="portfolio-content yellow-background">
            <h3>Password Generator</h3>
            <p>
              This website uses javascript to generate a new, random, secure
              password. As the user, just click the button and answer the
              prompts. Your new password will be displayed in the box. Copy and
              paste the password into your password keychain - and you are done!
            </p>
            <a
              href="https://mrsdno.github.io/password-generator"
              target="_blank"
            >
              Deployed Site
            </a>{" "}
            <a
              href="https://github.com/mrsdno/password-generator"
              target="_blank"
            >
              Github Repository
            </a>
          </div>
          <div className="portfolio-img">
            <a
              href="https://mrsdno.github.io/password-generator"
              target="_blank"
            >
              <img src={passwordGenerator} />
            </a>
          </div>
        </article>
      </section>
    );
}

export default Portfolio;