import React, { useState } from "react";
import "./port.css";
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.jpg";
import project4 from "../../assets/project-4.png";
import project5 from "../../assets/project-5.png";
import project6 from "../../assets/project-6.png";
import project7 from "../../assets/project-7.png";
import project8 from "../../assets/project-8.jpg";
import project9 from "../../assets/project-9.png";
import project10 from "../../assets/1project.jpg";
import project11 from "../../assets/2project.jpg";
import project12 from "../../assets/3project.jpg";
import { LuEye } from "react-icons/lu";

const Portofolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="portfolio">
      <div className="portfolioCards">
        <div className="portfolioCard" onClick={() => openModal(project1)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project1} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Finance</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project2)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project2} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Orizon</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project3)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project3} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Fundo</h4>
            <p className="portDescCard">Web Design</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project4)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project4} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Brawlhalla</h4>
            <p className="portDescCard">Application</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project5)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project5} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">DSM</h4>
            <p className="portDescCard">Web Design</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project6)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project6} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Meta Spark</h4>
            <p className="portDescCard">Web Design</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project7)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project7} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Summary</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project8)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project8} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Task Manager</h4>
            <p className="portDescCard">Application</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project9)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project9} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Arrival</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project10)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project10} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Edusity</h4>
            <p className="portDescCard">Web Design</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project11)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project11} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Gemini Clone</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
        <div className="portfolioCard" onClick={() => openModal(project12)}>
          <div className="portImages">
            <LuEye className="portIconMata" />
            <div className="hoverAnjay"></div>
            <img className="portImage" src={project12} alt="" />
          </div>
          <div className="portCardApalah">
            <h4 className="portTitleCard">Youtube Clone</h4>
            <p className="portDescCard">Web Development</p>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
};

export default Portofolio;
