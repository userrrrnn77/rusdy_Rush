import React from "react";
import "./about.css";
import { FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { ImUserCheck } from "react-icons/im";
import { MdOutlineDesignServices, MdOutlineWeb } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { PiPaintBrushBroadFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutParagraf">
          <p className="abtSatu">
            A web developer is responsible for developing and maintaining a
            website, ensuring functionality and an attractive appearance. They
            use programming languages ​​such as HTML, CSS, and JavaScript to
            build responsive user interfaces. Web developers also often work
            with backend technology to manage data and ensure optimal site
            performance.
          </p>
          <p className="abtDua">
            Apart from technical skills, web developers must have
            problem-solving skills to overcome challenges in development. They
            work closely with designers and other teams to ensure the site meets
            user needs and is compatible across devices and browsers. Good
            communication skills are also important for explaining technical
            concepts to non-technical team members, ensuring effective
            collaboration. This expertise helps them create functional and
            aesthetic solutions.
          </p>
        </div>
        <div className="abtTeknologi">
          <div className="tekJudul">
            <div className="iconTek">
              <FaLaptopCode className="iconJudul" />
            </div>
            <h1 className="teknologiJudul">Technology</h1>
          </div>
          <div className="tekContainer">
            <div className="tekPerItem">
              <div className="tekIcon">
                <FaHtml5 className="iconsTekRinci html" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">HTML</h3>
                <p className="tekDesk">
                  HTML is a markup language used to create the structure of web
                  pages.
                </p>
              </div>
            </div>
            <div className="tekPerItem">
              <div className="tekIcon">
                <FaCss3 className="iconsTekRinci css" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">CSS</h3>
                <p className="tekDesk">
                  CSS is used to regulate the appearance and layout of elements
                  on a web page.
                </p>
              </div>
            </div>
            <div className="tekPerItem">
              <div className="tekIcon">
                <IoLogoJavascript className="iconsTekRinci js" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">JAVASCRIPT</h3>
                <p className="tekDesk">
                  JavaScript is a programming language used to add interactivity
                  to web pages.
                </p>
              </div>
            </div>
            <div className="tekPerItem">
              <div className="tekIcon">
                <FaReact className="iconsTekRinci react" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">REACT</h3>
                <p className="tekDesk">
                  React is a JavaScript library for building responsive and
                  dynamic user interfaces using components.
                </p>
              </div>
            </div>
            <div className="tekPerItem">
              <div className="tekIcon">
                <FaNodeJs className="iconsTekRinci nodejs" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">NODE JS</h3>
                <p className="tekDesk">
                  Node.js is a JavaScript runtime that allows executing
                  JavaScript code on the server side.
                </p>
              </div>
            </div>
            <div className="tekPerItem">
              <div className="tekIcon">
                <SiXampp className="iconsTekRinci xampp" />
              </div>
              <div className="tekRinci">
                <h3 className="judulTekRinci">XAMPP</h3>
                <p className="tekDesk">
                  XAMPP is a software package that provides a local server
                  environment for web development, including Apache, MySQL, and
                  PHP.
                </p>
              </div>
            </div>
          </div>
          <div className="tekJudul">
            <div className="iconTek">
              <ImUserCheck className="iconJudul" />
            </div>
            <h1 className="teknologiJudul">What I'm Doing</h1>
          </div>
          <div className="whatImDoing">
            <div className="whtimdoingperitem">
              <div className="whticon">
                <MdOutlineDesignServices className="iconwht" />
              </div>
              <div className="whttext">
                <h3 className="judulwht">Web Design</h3>
                <p className="whtdesk">
                  The most modern and high-quality design crafted at a
                  professional level
                </p>
              </div>
            </div>
            <div className="whtimdoingperitem">
              <div className="whticon">
                <CgWebsite className="iconwht" />
              </div>
              <div className="whttext">
                <h3 className="judulwht">Web Development</h3>
                <p className="whtdesk">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
            <div className="whtimdoingperitem">
              <div className="whticon">
                <PiPaintBrushBroadFill className="iconwht" />
              </div>
              <div className="whttext">
                <h3 className="judulwht">Graphic Design</h3>
                <p className="whtdesk">
                  A graphic designer who creates the most modern and
                  high-quality designs at a professional level
                </p>
              </div>
            </div>
            <div className="whtimdoingperitem">
              <div className="whticon">
                <MdOutlineWeb className="iconwht" />
              </div>
              <div className="whttext">
                <h3 className="judulwht">FrontEnd</h3>
                <p className="whtdesk">
                  A frontend designer who creates the most modern and
                  high-quality designs at a professional level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
