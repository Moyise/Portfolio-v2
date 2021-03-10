import React from "react";
import { Link } from "react-scroll";
import "./projects.scss";
import amazonClone from "../../img/amazonClone.png";
import moyiseShop from "../../img/moyiseShop.png";
import sneakers from "../../img/sneakers.png";
import mongo from "../../img/mongo.png";
import redux from "../../img/redux.png";
import react from "../../img/react.png";
import scss from "../../img/scss.png";
import css3 from "../../img/css3.png";
import javascript from "../../img/javascript.png";
import typescript from "../../img/typescript.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/express.png";
import stripe from "../../img/stripe.png";

const Projects = () => {
  return (
    <>
      <div id="project" className="project">
        <div className="projectContainer">
          <div className="projectsWrap">
            <h1 className="title">Latest Projects</h1>
            <p className="description">Here you can find some of my latest projects.</p>
            <div className="projectsCard">
              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={amazonClone} alt="amazonClone" />
                </div>
                <div className="links">
                  <a
                    href="https://mzon.online/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Moyise/Amazon-Clone"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                </div>
                <p className="projectTitle">Amazon Clone</p>
                <p className="details">
                  Inspired by Amazon, I made a complete E-commerce web app where you can
                  add products to cart, choose the payment method, leave comments and
                  more. This project is made using React, Redux, Typescript, ...
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={scss} alt="scss" />
                    </span>
                    <span className="skill">Scss</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={typescript} alt="typescript" />
                    </span>
                    <span className="skill">Typescript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">Nodejs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MongoDB</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={stripe} alt="stripe" />
                    </span>
                    <span className="skill">Stripe</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={sneakers} alt="sneakers" />
                </div>
                <div className="links">
                  <a
                    href="https://mysneaker.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Moyise/SneakersShop"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                </div>
                <p className="projectTitle">Sneakers Shop</p>
                <p className="details">
                  Sneakers Shop is a E-commerce web app that has the functionalities like
                  creating products, deleting products, adding admin users and more. Made
                  using React, Redux, NodeJs, Express, MongoDB, ...
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={css3} alt="css3" />
                    </span>
                    <span className="skill">Css3</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NodeJs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={moyiseShop} alt="moyiseShop" />
                </div>
                <div className="links">
                  <a
                    href="https://moyiseshopapp.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Moyise/moyiseshop"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Code
                  </a>
                </div>
                <p className="projectTitle">Moyise Shop</p>
                <p className="details">
                  Moyise Shop is another Full Stack E-commerce web app inspired by
                  BestBuy. It got functionalities like buying a product, leaving reviews
                  and comments, etc. It's made with React,Redux, MongoDB, ...
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={css3} alt="css3" />
                    </span>
                    <span className="skill">Css3</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={javascript} alt="javascript" />
                    </span>
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={react} alt="react" />
                    </span>
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={redux} alt="redux" />
                    </span>
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={nodejs} alt="nodejs" />
                    </span>
                    <span className="skill">NodeJs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={express} alt="express" />
                    </span>
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skillLogo">
                      <img src={mongo} alt="mongo" />
                    </span>
                    <span className="skill">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="contact" smooth={true} duration={1000} className="scroll">
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

export default Projects;
