import React from "react";
import "../styles/Footer.scss";

function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div className="container" id="footer-container">
      this is a footer
      <p>© 2022-{date}</p>
    </div>
  );
}

export default Footer;