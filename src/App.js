import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import AboutMe from "./components/AboutMe";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
