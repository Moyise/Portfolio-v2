import React, { useState } from "react";
import "./backToTop.scss";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <div className={showScroll ? "backToTop show" : "backToTop"} onClick={scrollTop}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.57599L5.98999 11.586L7.40399 13.001L12.004 8.40099L16.604 13.001L18.01 11.586L12.001 5.57599H12ZM12 11L5.98999 17.011L7.40399 18.425L12.004 13.825L16.604 18.425L18.01 17.011L12.001 11.001L12 11Z"
            fill="black"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </>
  );
};

export default BackToTop;
