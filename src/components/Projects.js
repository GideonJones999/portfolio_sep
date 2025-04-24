import React from "react";
import "../styles/OldPortfolios.scss";
import { SitePreview } from "./SitePreview";

export default function Projects() {
  return (
    <div className="Projects-Container">
      <h2>Projects</h2>
      <SitePreview
        title="What to Watch"
        site="https://startup.moviepick.click/"
        gitLink="https://github.com/GideonJones999/WhatToWatch/tree/react-branch"
        description={"A Project made for my CS 260 class at BYU, using React, Mongo DB, and is hosted on AWS. You manke an account, and then tell the service what movies you've seen recently, and your streeming services. The site then recommends a new movie for you to watch. Will return to the project in the coming future."}
      />    
      <SitePreview
        title="Pokémon Match"
        site="https://pokemonmatching.web.app/"
        gitLink="https://github.com/GideonJonesMTECH/GroupAngularPokemon"
        description={
          <p>
            This is a project that I worked on with{" "}
            <a
              href="https://www.linkedin.com/in/sam-leishman-9201471b5/"
              target="_blank"
              rel="noreferrer"
            >
              Sam Leishman
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/hayden-gibbons-a464b81b2/"
              target="_blank"
              rel="noreferrer"
            >
              Hayden Gibbons
            </a>
            ! It was a ton of fun, especially with layering the images on top of
            one another. It was also a good way to integrate Firebase with the
            Google login and the online scores. It was made using Angular in
            April and May of 2021.
          </p>
        }
      />
      <SitePreview
        title="E-Commerce Mock-up"
        site="https://gideonjonesmtech.github.io/React-Store/"
        gitLink="https://github.com/GideonJonesMTECH/React-Store/"
        description={
          <p>
            Another group project with{" "}
            <a
              href="https://www.linkedin.com/in/samueljnorman/"
              target="_blank"
              rel="noreferrer"
            >
              Sam Norman
            </a>
            ! We worked together to create this basic project using React and
            pulling from an API to make all of the appropriate statistics. Made
            in December 2020 - January 2021.
          </p>
        }
      />
      <SitePreview
        img="golfNGScreenshot.png"
        title="Angular Golf Scorecard"
        site="https://gideonjonesmtech.github.io/Angular-Golf-Scorecard/"
        gitLink="https://github.com/GideonJonesMTECH/Angular-Golf-Scorecard"
        description="Unfortunately, this project no longer works, as the account I made
        it with has been terminated. However, it was an amazing opportunity
        to use Grids and to integrate an API with all of these attributes.
        Made in April of 2021 using Angular."
      />
      <SitePreview
        site="https://gideonjonesmtech.github.io/To-Do-App/"
        title="JS To-do App"
        gitLink="https://github.com/GideonJonesMTECH/To-Do-App"
        description="A simple checklist app, but was made using more advanced JS then I
        was used to at the time, and was super fun to put together. I also
        learned how to use the local data on the site to remember the
        already made lists. Made October 2021 with JS, HTML, and CSS."
      />
      <SitePreview
        img="RPG-Screenshot.png"
        title="Console RPG"
        site="https://github.com/GideonJones999/Recreate-DND---EXE/"
        gitLink="https://github.com/kylercressall/recreateDND/tree/master"
        description={
          <p>
            A simple executable that I made with my friend{" "}
            <a
              href="https://www.linkedin.com/in/kyler-cressall-210279255/"
              target="_blank"
              rel="noreferrer"
            >
              Kyler Cressall
            </a>{" "}
            that we made in High School as a simple RPG in the C# console. We
            both learned a lot about classes and inheritance, which was a ton of
            fun. We both found that our High School Programming class was too
            simple, so after we quickly finished our work we would work on this
            small project. Made from September to October of 2019.
          </p>
        }
      />
    </div>
  );
}
