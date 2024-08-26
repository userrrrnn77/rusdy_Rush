import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [judul, setJudul] = useState("About");
  const lokasi = useLocation();
  useEffect(() => {
    const path = lokasi.pathname;
    switch (path) {
      case "/":
        setJudul("About");
        break;
      case "/resume":
        setJudul("Resume");
        break;
      case "/portofolio":
        setJudul("Portofolio");
        break;
      case "/contact":
        setJudul("Contact");
        break;
      default:
        setJudul("About");
    }
  },[lokasi.pathname]);
  return (
    <div className="navbar">
      <h1 className="navTitle">{judul}</h1>
      <div className="navLists">
        <Link className="navList" to="/">
          ABOUT
        </Link>
        <Link className="navList" to="/resume">
          RESUME
        </Link>
        <Link className="navList" to="/portofolio">
          PORTOFOLIO
        </Link>
        <Link className="navList" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
