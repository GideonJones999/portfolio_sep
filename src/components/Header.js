import React, { useState } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div id="header-container">
      <Link id="Site-Logo" to="/">
        {" "}
        <img id="logo" src="PortLogo.png" alt="Gideon's Logo" />
      </Link>
      <div id="other-links-container">
        <button
          id="toggleMenuOpenButton"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <Icon.Menu />
        </button>

        <div className={isNavExpanded ? "other-links" : "other-links expanded"}>
          <ul>
            <li>
              <Link to="about">
                <h3>About Me</h3>
              </Link>
            </li>
            <li>
              <a>
                <h3>Past Portfolios</h3>
              </a>
            </li>
            <li>
              <a>
                <h3>Contact Me</h3>
              </a>
            </li>
            <li>
              <a>
                <h3>Other</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
