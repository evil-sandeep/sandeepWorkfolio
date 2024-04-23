import React from "react";
import "./Footer.css";
import shapebg from '../../../assets/Home/shape-bg.png'

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={shapebg}
          alt="you have problem with the imge"
        />
      </div>
    </div>
  );
}
