import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main.js";
import AboutMe from "./components/AboutMe";
import OldPortfolios from "./components/OldPortfolios";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="old-portfolios" element={<OldPortfolios />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
