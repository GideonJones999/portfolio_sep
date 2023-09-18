import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Button from "./Button.js";
import AboutMe from "./AboutMe.js";
import "../styles/Common.scss";

function Main() {
  return (
    <div className="app-container">
      <Header />
      <div>
        <p> Welcome to my portfolio! </p>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
