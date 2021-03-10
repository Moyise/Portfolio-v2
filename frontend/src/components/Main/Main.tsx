import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import "./main.scss";
import hand from "../../img/hand.png";
import Icon from "../../img/Icon.png";
import BackToTop from "../BackToTop/BackToTop";

const Main = () => {
  useEffect(() => {
    let tl2 = gsap.timeline();
    tl2.from(".scroll", { y: 20, repeat: -1, duration: 2, yoyo: true }, "-=1");
  }, []);

  return (
    <>
      <div id="main" className="main">
        <div className="mainContainer">
          <h1 className="mainTitle">
            <span>Hi, my name is</span>
            <span>Moyise Kane.</span>
            <span>I’m a Web Designer</span>
            <span>and Developer.</span>
          </h1>
          <div className="circle"></div>
          <div className="helloCard">
            <div className="hand">
              <img src={hand} alt="hand" />
            </div>
            <span className="greeting">Hello, I am</span>
            <span className="name">Moyise</span>
          </div>
          <div className="textCard"></div>
          <div className="profileCard">
            <img src={Icon} alt="Icon" />
            <img
              className="pic"
              src="https://res.cloudinary.com/dlcnm6zxg/image/upload/v1612141830/moyise_s47wxo.jpg"
              alt="Icon"
            />
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
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default Main;
