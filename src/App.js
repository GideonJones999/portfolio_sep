import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main.js";
import AboutMe from "./components/AboutMe";
import OldPortfolios from "./components/OldPortfolios";
import ContactMe from "./components/ContactMe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="old-portfolios" element={<OldPortfolios />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
