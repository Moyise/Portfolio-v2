import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div className="notFoundContainer">
          <h1 className="top">404</h1>
          <h1 className="middle">Page Not Found</h1>
          <Link to="/" className="button">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
