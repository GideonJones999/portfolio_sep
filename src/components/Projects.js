import React from "react";
import "../styles/OldPortfolios.scss";
import * as Icon from "react-feather";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="portfolio-container">
        <iframe
          src="https://pokemonmatching.web.app/"
          title="Pokémon Match"
        ></iframe>
        <div>
          <span>
            <a href="https://pokemonmatching.web.app/" target="_blank">
              <h3>Pokémon Matching Game</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/GroupAngularPokemon"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            This is a project that I worked on with{" "}
            <a
              href="https://www.linkedin.com/in/sam-leishman-9201471b5/"
              target="_blank"
            >
              Sam Leishman
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/hayden-gibbons-a464b81b2/"
              target="_blank"
            >
              Hayden Gibbons
            </a>
            ! It was a ton of fun, especially with layering the images on top of
            one another. It was also a good way to integrate Firebase with the
            Google login and the online scores. It was made using Angular in
            April and May of 2021.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/React-Store/"
          title="E-Commerce Mock-up"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/React-Store/"
              target="_blank"
            >
              <h3>E-Commerce Mock-up</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/React-Store/"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            Another group project with{" "}
            <a
              href="https://www.linkedin.com/in/samueljnorman/"
              target="_blank"
            >
              Sam Norman
            </a>
            ! We worked together to create this basic project using React and
            pulling from an API to make all of the appropriate statistics. Made
            in December 2020 - January 2021.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <img src="photos/golfNGScreenshot.png" alt="Angular Golf Screenshot" />
        {/* <iframe
          src="https://gideonjonesmtech.github.io/Angular-Golf-Scorecard/"
          title="Golf Scorecard"
        ></iframe> */}
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/Angular-Golf-Scorecard/"
              target="_blank"
            >
              <h3>Golf Scorecard</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/Angular-Golf-Scorecard"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            Unfortunately, this project no longer works, as the account I made
            it with has been terminated. However, it was an amazing opportunity
            to use Grids and to integrate an API with all of these attributes.
            Made in April of 2021 using Angular.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/To-Do-App/"
          title="To-do App"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/To-Do-App/"
              target="_blank"
            >
              <h3>To-Do App</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/To-Do-App"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            A simple checklist app, but was made using more advanced JS then I
            was used to at the time, and was super fun to put together. I also
            learned how to use the local data on the site to remember the
            already made lists. Made October 2021 with JS, HTML, and CSS.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <img src="photos/RPG-Screenshot.png" alt="Console RPG" />
        {/* <iframe
          src="https://github.com/GideonJones999/Recreate-DND---EXE/"
          title="Console RPG"
        ></iframe> */}
        <div>
          <span>
            <a
              href="https://github.com/GideonJones999/Recreate-DND---EXE/"
              target="_blank"
            >
              <h3>Console RPG</h3>
            </a>
            <a
              href="https://github.com/kylercressall/recreateDND/tree/master"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            A simple executable that I made with my friend{" "}
            <a
              href="https://www.linkedin.com/in/kyler-cressall-210279255/"
              target="_blank"
            >
              Kyler Cressall
            </a>{" "}
            that we made in High School as a simple RPG in the C# console. We
            both learned a lot about classes and inheritance, which was a ton of
            fun. We both found that our High School Programming class was too
            simple, so after we quickly finished our work we would work on this
            small project. Made from September to October of 2019.
          </p>
        </div>
      </div>
    </div>
  );
}
