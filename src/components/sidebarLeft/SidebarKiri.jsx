import React, { useState, useEffect } from "react";
import "./sidebar.css";
import avatar from "../../assets/my-avatar.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsCalendar2Month } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Typewriter = ({ texts, typingSpeed = 100, pauseDuration = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        const timeoutId = setTimeout(() => {
          setCurrentText(
            (prev) => prev + texts[currentTextIndex].charAt(currentText.length)
          );
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), pauseDuration);
      }
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText("");
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }, pauseDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [
    currentText,
    isTyping,
    texts,
    currentTextIndex,
    typingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="typewriterText">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

const SidebarKiri = () => {
  const textWriter = [
    "Web Developer",
    "Web Design",
    "Frontend Developer",
    "Graphic Designer",
  ];

  const handleClick = (sideDesk) => {
    if (window.innerWidth <= 600) {
      alert(sideDesk);
    }
  };

  return (
    <div className="sidebarKiri">
      <div className="sidebarProfile">
        <img className="sideFoto" src={avatar} alt="Avatar" />
        <div className="mediaScreen">
          <h1 className="sideName">Rusdy Rush</h1>
          <p className="sideGelar">
            <Typewriter
              texts={textWriter}
              typingSpeed={100}
              pauseDuration={2000}
            />
          </p>
        </div>
      </div>
      <div className="sideRincian">
        <div
          className="rincianPerItem"
          onClick={() => handleClick("devcodedev7777@gmail.com")}
        >
          <div className="sideIcons">
            <MdOutlineMailOutline className="sideIcon" />
          </div>
          <div className="sideTexts">
            <h3 className="sideJudul">EMAIL</h3>
            <p className="sideDesk">devcodedev7777@gmail.com</p>
          </div>
        </div>
        <div
          className="rincianPerItem"
          onClick={() => handleClick("+628123456789012")}
        >
          <div className="sideIcons">
            <IoPhonePortraitOutline className="sideIcon" />
          </div>
          <div className="sideTexts">
            <h3 className="sideJudul">PHONE</h3>
            <p className="sideDesk">+628123456789012</p>
          </div>
        </div>
        <div
          className="rincianPerItem"
          onClick={() => handleClick("Feb 28, 1997")}
        >
          <div className="sideIcons">
            <BsCalendar2Month className="sideIcon" />
          </div>
          <div className="sideTexts">
            <h3 className="sideJudul">BIRTHDAY</h3>
            <p className="sideDesk">Feb 28, 1997</p>
          </div>
        </div>
        <div
          className="rincianPerItem"
          onClick={() => handleClick("Surabaya, Indonesia")}
        >
          <div className="sideIcons">
            <SlLocationPin className="sideIcon" />
          </div>
          <div className="sideTexts">
            <h3 className="sideJudul">LOCATION</h3>
            <p className="sideDesk">Surabaya, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p className="copyright">&copy; Rusdy Rush - 2024</p>
      </div>
    </div>
  );
};

export default SidebarKiri;
