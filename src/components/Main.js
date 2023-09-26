import React from "react";
import Button from "./Button.js";
import "../styles/Common.scss";
import "../styles/MainPage.scss";
import * as Icon from "react-feather";

function Main() {
  return (
    <div className="app-container">
      <div className="all-content">
        <h1> Gideon Jones </h1>
        <div id="main-content">
          <img src="photos/ProfilePic.jpg" />
          <div>
            <ul>
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
                <a href="Resume - 26.09.23.pdf" target="_blank">
                  <Icon.File />
                  <p className="descriptionText">Resume</p>
                </a>
              </li>
              {/* <li>
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
            </li> */}
            </ul>
          </div>
        </div>
        <p>
          Hey, my name is Gideon! I'm a Full-Stack Software Developer, with
          experience in C#, JS, React, and more. Feel free to take a look
          around! You can contact me at{" "}
          <a href="mailto:gideon.w.jones@gmail.com">
            {" "}
            gideon.w.jones@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Main;
