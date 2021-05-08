import React from "react";
import { Link } from "react-scroll";
import "./about.scss";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="aboutContainer">
          <div className="aboutCard">
            <h1 className="title">About</h1>
            <div className="details">
              <p className="top">Hello!</p>
              <p className="middle">
                My name is <span>Kane</span> and I’m a passionate Frontend Web Developer
                using modern technologies to build amazing products and focusing on
                solving problems for different niches and different industries using the
                power of technologies.
              </p>
              <p className="bottom">
                I will love to hear from you. Whether it’s a project, job opportunity, or
                just a chat. Feel free to{" "}
                <Link to="contact" smooth={true} duration={1000} className="link">
                  Contact me
                </Link>
                .
              </p>
            </div>
            <div className="skills">
              <p className="top">Skills</p>
              <div className="middle">
                <p className="left">Front-End:</p>
                <p className="right">
                  HTML5, CSS3, JavaScript, TypeScript, SASS, REACT, REDUX, jQuery,
                  Bootstrap, Tailwind-CSS, Styled-Components.
                </p>
              </div>
              <div className="middle">
                <p className="left">Back-End:</p>
                <p className="right">
                  NodeJS, ExpressJS, REST-api, JSON-apis, Postman, Authentication and
                  Security, GraphQL.
                </p>
              </div>
              <div className="middle">
                <p className="left">Databases:</p>
                <p className="right">MongoDB, MySQL.</p>
              </div>
              <div className="middle">
                <p className="left">Design:</p>
                <p className="right">Figma, Photoshop.</p>
              </div>
              <div className="middle">
                <p className="left">Other:</p>
                <p className="right">
                  Git, Github, NGINX, Ubuntu, DigitalOcean, Heroku,
                  <span> Unit Testing(Jest and React Testing Library)</span>.
                </p>
              </div>
            </div>
            <p className="last">and I’m always learning new technologies.</p>
            <div className="custom-shape-divider-bottom-1618821569">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <Link to="project" smooth={true} duration={1000} className="scroll">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18.424L5.99 12.414L7.404 10.999L12.004 15.599L16.604 10.999L18.01 12.414L12.001 18.424H12ZM12 13L5.99 6.989L7.404 5.575L12.004 10.175L16.604 5.575L18.01 6.989L12.001 12.999L12 13Z"
                  fill="#6ADBFF"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
