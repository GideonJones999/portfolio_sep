import React from "react";
import "./../styles/OldPortfolios.scss";
import * as Icon from "react-feather";
import { SitePreview } from "./SitePreview";

export default function OldPortfolios() {
  return (
    <div className="Projects-Container">
      <h2>Portfolios</h2>
      <SitePreview
        title="Pre-MTECH Portfolio"
        site="https://gideonjonesmtech.github.io/PortfolioV.0/"
        gitLink="https://github.com/GideonJonesMTECH/PortfolioV.0"
        description="My first portfolio! It was made with very basic HTML and CSS, and
        was one of the first webistes I worked on. The design is crude, and
        a couple of the links don't even work. It was made in August of
        2020."
      />
      <SitePreview
        title="Beginning Portfolio"
        site="https://gideonjonesmtech.github.io/PortfolioV.1/"
        gitLink="https://github.com/GideonJonesMTECH/PortfolioV.1/"
        description="After I started at MTECH, I started to work on a newer version of
        the same portfolio. I had learned about how to better design the
        site and the functionality. This version of the Portfolio was made
        in September of 2020."
      />
      <SitePreview
        title="SCSS Portfolio"
        site="https://gideonjonesmtech.github.io/PortfolioV.2/"
        gitLink="https://github.com/GideonJonesMTECH/PortfolioV.2/"
        description="After I learned about SCSS, I immediately remade my portfolio using
        this powerful new tool. It was so much fun to make it look more
        exactly what I wanted, and I continued to learn. Made in September
        2020."
      />
      <SitePreview
        title="Pre-Mission Portfolio"
        site="https://gideonjonesmtech.github.io/PortfolioV.4/"
        gitLink="https://github.com/GideonJonesMTECH/PortfolioV.4"
        description="This was the portfolio that I finished after learning React. It was
        obviously the most polished and reactive portfolio up to that point,
        and it was a blast to make. The images on the 'About' page swap on a
        refresh, and I was so proud of it. Made in April 2021."
      />
    </div>
  );
}
