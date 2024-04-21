import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/sandeepkumarsahoo.chandan" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/evil-sandeep " target="_blank" rel="noreferrer">
                <i className="fa fa-github" target="_blank" rel="noreferrer" />
              </a>
              <a href="https://www.instagram.com/evil_sandeep/" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@sandeepkumarsahoo2274" target="_blank" rel="noreferrer" >
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Sandeep88034451 " target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sandeep</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stck Dev 📱",
                    1000,
                    "React.js  Dev⚛️ ",
                    1000,
                    "Node.js Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <a href="https://evil-sandeep.github.io/sandeepDesignFolio/" target="_blank" rel="noreferrer"> <button className="btn primary-btn">  Hire Me </button></a>
            <a href="sandeep's_resume.pdf" download="Sandeep's_resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
