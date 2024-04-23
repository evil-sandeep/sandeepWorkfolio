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
              <a href="https://www.facebook.com/sandeepkumarsahoo.chandan">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/evil-sandeep">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/evil_sandeep/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@sandeepkumarsahoo2274">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Sandeep88034451">
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
                    "Ethusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stck Developer 📱",
                    1000,
                    "Frontend Developer Dev 🔴",
                    1000,
                    "React.js Developer 🌐",
                    1000,
                    "Javascript Developer ",
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
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Sandeep's_resume.pdf" download="Sandeep_resume.pdf">
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
