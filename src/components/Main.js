import React from "react";
import Button from "./Button.js";
import "../styles/Common.scss";
import "../styles/MainPage.scss";
import * as Icon from "react-feather";

function Main() {
  return (
    <div className="app-container">
      <div>
        <h1> Welcome to my portfolio! </h1>
        <div id="main-content">
          <img src="logo192.png" />
          <div>
            <ul>
              <li>
                <a href="mailto:gideon.w.jones@gmail.com">
                  <Icon.Mail />
                  <p className="descriptionText">E-mail</p>
                </a>
              </li>
              <li id="personal-github">
                <a target="_blank" href="https://github.com/GideonJones999">
                  <Icon.GitHub />
                  <p className="descriptionText">Personal</p>
                </a>
              </li>
              <li id="school-github">
                <a target="_blank" href="https://github.com/GideonJonesMTECH">
                  <Icon.GitHub />
                  <p className="descriptionText">MTECH</p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gideon-jones-9173081b2/"
                >
                  <Icon.Linkedin />
                  <p className="descriptionText">LinkedIn</p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/gideonjones2003/"
                >
                  <Icon.Facebook />
                  <p className="descriptionText">Facebook</p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/gideonjones2003/"
                >
                  <Icon.Instagram />
                  <p className="descriptionText">Instagram</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        // Button to download portfolio
        <p>
          Hey! My name is Gideon! I'm a software Developer focusing on
          Full-Stack development. This portfolio was made using React. Feel free
          to take a look around!
        </p>
        // Email form
      </div>
    </div>
  );
}

export default Main;
