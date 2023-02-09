import React from "react";
import Menubar from "./portfolioWebsite/Menubar/Menubar";
import Home from "./portfolioWebsite/Home/Home";
import About from "./portfolioWebsite/About/About";
import Contact from "./portfolioWebsite/Contact/Contact";
import Certificate from "./portfolioWebsite/Certificate/Certificate";
import "./app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Menubar />
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
