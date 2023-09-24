import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div id="footer-container">
      <h3>Gideon Jones</h3>
      <button onClick={backToTop}>Back to Top</button>
      <p>© 2022-{date}</p>
    </div>
  );
}
