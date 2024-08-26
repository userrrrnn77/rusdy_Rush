import React from "react";
import { Route, Routes } from "react-router-dom";
import "./utama.css";
import About from "../../pages/about/About";
import Resume from "../../pages/resume/Resume";
import Portofolio from "../../pages/portofolio/Portofolio";
import Contact from "../../pages/contact/Contact";
import Navbar from "../navbar/Navbar";

const UtamaKanan = () => {
  return (
    <div className="utama">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default UtamaKanan;
