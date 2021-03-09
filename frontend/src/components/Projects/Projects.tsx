import React from "react";
import "./projects.scss";
import homepage from "../../img/homepage.png";
import mongo from "../../img/mongo.png";
import redux from "../../img/redux.png";
import react from "../../img/react.png";
import scss from "../../img/scss.png";
import javascript from "../../img/javascript.png";
import typescript from "../../img/typescript.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/express.png";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="projectContainer">
          <div className="projectsWrap">
            <h1 className="title">Latest Projects</h1>
            <p className="description">
              Here you can find some of the projects that I created recently.
            </p>
            <div className="projectsCard">
              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={homepage} alt="homepage" />
                </div>
                <div className="links">
                  <span>Visit</span>
                  <span>Code</span>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
                  suscipit nunc, dignissim hendrerit neque in non pulvinar.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">SCSS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">JAVASCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">REACT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">TYPESCRIPT</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">REDUX</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NODEJS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">EXPRESS</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MONGODB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
