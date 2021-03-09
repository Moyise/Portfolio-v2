import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <h1 className="title">
            <span>I'm open to take on </span>
            <span>job opportunities.</span>
          </h1>
          <p className="subTitle">
            <span>You need help with a project or you want to hire me?</span>
            <span>
              Send me a <span className="link">message</span> and I’ll get back to you
              ASAP.
            </span>
          </p>
          <div className="scroll">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.57605L5.99 11.586L7.404 13.001L12.004 8.40105L16.604 13.001L18.01 11.586L12.001 5.57605H12ZM12 11L5.99 17.011L7.404 18.425L12.004 13.825L16.604 18.425L18.01 17.011L12.001 11.001L12 11Z"
                fill="#6ADBFF"
              />
            </svg>
          </div>
          <div className="copyright">
            <p>
              &copy; moyise 20<span>21</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
