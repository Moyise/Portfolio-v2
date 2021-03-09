import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";

const HomeScreen = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeScreen;
