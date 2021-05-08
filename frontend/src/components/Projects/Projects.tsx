import React from "react";
import { Link } from "react-scroll";
import "./projects.scss";
import amazonClone from "../../img/amazonClone.png";
import twitterClone from "../../img/twitterClone.png";
import moyiseShop from "../../img/moyiseShop.png";
import sneakers from "../../img/sneakers.png";
import KaN from "../../img/KaN.png";
import Eclips from "../../img/Eclips.png";

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
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/Amazon-Clone"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
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
                    <span className="skill">Scss</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Typescript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Nodejs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">MongoDB</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Stripe</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Mongoose</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={twitterClone} alt="twitterClone" />
                </div>
                <div className="links">
                  <a
                    href="https://mter.online/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/Twitter-Clone"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
                <p className="projectTitle">Twitter Clone</p>
                <p className="details">
                  This is a Twitter clone I made with Typescript/React and implemented a
                  realtime messaging system using Socket.io and made some tests using Jest
                  and React testing library(RTL)...
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skill">Scss</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Typescript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Nodejs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">GraphQL</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Mongoose</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Socket.io</span>
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
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/SneakersShop"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
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
                    <span className="skill">Css3</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">NodeJs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">MongoDB</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Mongoose</span>
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
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/moyiseshop"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
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
                    <span className="skill">Css3</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Redux</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">NodeJs</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Express</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">MongoDB</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Mongoose</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={KaN} alt="KaN" />
                </div>
                <div className="links">
                  <a
                    href="https://confident-ride-e2259d.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/KaneS"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
                <p className="projectTitle">Kane's</p>
                <p className="details">
                  Kane's is a landing template for businesses startups which anyone can
                  use to present their business online. Made using Html, Css, Sass,
                  Javascript and React.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skill">Html</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Css</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Scss</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="imageWrap">
                  <img className="image" src={Eclips} alt="Eclips" />
                </div>
                <div className="links">
                  <a
                    href="https://musing-jones-ae768f.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/Moyise/Eclips"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
                <p className="projectTitle">Eclips</p>
                <p className="details">
                  Eclips is a landing template for businesses startups which anyone can
                  use to present their business online. Made using Html, Css, Sass,
                  Javascript and React.
                </p>
                <div className="skills">
                  <div className="skillWrap">
                    <span className="skill">Html</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Css</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Scss</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">Javascript</span>
                  </div>
                  <div className="skillWrap">
                    <span className="skill">React</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-shape-divider-bottom-1618821907">
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
