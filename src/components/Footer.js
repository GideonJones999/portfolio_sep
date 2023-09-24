import React from "react";
import "../styles/Footer.scss";

function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div id="footer-container">
      <h3>Gideon Jones</h3>
      // Return to top button
      <p>© 2022-{date}</p>
    </div>
  );
}

export default Footer;
