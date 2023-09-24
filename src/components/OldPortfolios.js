import React from "react";
import "../styles/OldPortfolios.scss";
import * as Icon from "react-feather";

export default function OldPortfolios() {
  return (
    <div>
      <h3>Old Portfolios</h3>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/PortfolioV.0/"
          title="Pre-MTECH Portfolio"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/PortfolioV.0/"
              target="_blank"
            >
              <h3>Portfolio 1</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/PortfolioV.0"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            My first portfolio! It was made with very basic HTML and CSS, and
            was one of the first webistes I worked on. The design is crude, and
            a couple of the links don't even work. It was made in August of
            2020.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/PortfolioV.1/"
          title="Beginning Portfolio"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/PortfolioV.1/"
              target="_blank"
            >
              <h3>Portfolio 2</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/PortfolioV.1"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            After I started at MTECH, I started to work on a newer version of
            the same portfolio. I had learned about how to better design the
            site and the functionality. This version of the Portfolio was made
            in September of 2020.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/PortfolioV.2/"
          title="SCSS Portfolio"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/PortfolioV.2/"
              target="_blank"
            >
              <h3>Portfolio 2</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/PortfolioV.2"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            After I learned about SCSS, I immediately remade my portfolio using
            this powerful new tool. It was so much fun to make it look more
            exactly what I wanted, and I continued to learn. Made in September
            2020.
          </p>
        </div>
      </div>
      <div className="portfolio-container">
        <iframe
          src="https://gideonjonesmtech.github.io/PortfolioV.4/"
          title="Fourth Portfolio"
        ></iframe>
        <div>
          <span>
            <a
              href="https://gideonjonesmtech.github.io/PortfolioV.4/"
              target="_blank"
            >
              <h3>Portfolio 4</h3>
            </a>
            <a
              href="https://github.com/GideonJonesMTECH/PortfolioV.4"
              target="_blank"
            >
              <Icon.GitHub />
            </a>
          </span>
          <p>
            This was the portfolio that I finished after learning React. It was
            obviously the most polished and reactive portfolio up to that point,
            and it was a blast to make. The images on the "about" page swap on a
            refresh, and I was so proud of it. Made in April 2021.
          </p>
        </div>
      </div>
    </div>
  );
}
