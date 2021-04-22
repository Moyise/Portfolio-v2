import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import "./main.scss";
import circle from "../../img/circle.svg";
import BackToTop from "../BackToTop/BackToTop";

const Main = () => {
  useEffect(() => {
    let tl2 = gsap.timeline();
    tl2.from(".scroll", { y: 20, repeat: -1, duration: 2, yoyo: true }, "-=1");
  }, []);

  return (
    <>
      <section id="main" className="main">
        <div className="mainContainer">
          <div className="hero-col">
            <h1 className="mainTitle">Hi, my name is</h1>
            <h1 className="mainTitle">Kane.</h1>
            <h1 className="mainTitle">I’m a Web Designer</h1>
            <h1 className="mainTitle">and Developer.</h1>
          </div>

          <img className="circle" src={circle} alt="circle" />

          <div className="rectangle2"></div>
          <div className="rectangle1"></div>
          <div className="custom-shape-divider-bottom-1618817524">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Link to="about" smooth={true} duration={1000} className="scroll">
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

        <BackToTop />
      </section>
    </>
  );
};

export default Main;
