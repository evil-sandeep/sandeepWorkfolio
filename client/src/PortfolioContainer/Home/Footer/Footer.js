import React from "react";
import "./Footer.css";
import bgImage from "../../../assets/Home/bg.png"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          // src={require("../../../assets/Home/bg.png").default}
          src={bgImage}
          alt="you have problem with the img"

        />
      </div>
    </div>
  );

}
