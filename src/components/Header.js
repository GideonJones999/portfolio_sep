import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <Link id="Site-Logo" to="/">
        {" "}
        <img id="logo" src="PortLogo.png" alt="Gideon's Logo" />
      </Link>
      <div id="other-links">
        <Link to="about">About Me</Link>
        <h3>Past Portfolios</h3>
        <h3>Contact Me</h3>
        <h3>Other</h3>
      </div>
    </div>
  );
}

export default Header;
