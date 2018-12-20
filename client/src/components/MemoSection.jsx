import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/project_info.css";

import simon from "../assets/img/Simon_nonUser.gif";
import marioLogo from "../assets/img/mgm_logo.svg";

function MemoSection() {
  return (
    <div className="main_container">
      <div className="title_card">
        <h1>Memo | Simon Game</h1>

        <h2>Game based on the classic Simon Game from the 80's </h2>
      </div>

      <div className="image_container">
        <a
          href="https://memoioapp.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="visit_btn">
            <i className="fa fa-external-link" aria-hidden="true" />
            visit the website
          </button>
        </a>
        <img className="img_carousel" src={simon} alt="carousel" />
      </div>

      <div className="about_project">
        <h2>About this project</h2>
        <hr />

        <p>
          This project is a remake of a Vanilla JavaScript version of the Simon
          game app that I built for FreeCodeCamp Front-End certification. This
          is my very first React.js application that I ever did. It has an
          special place in my heart. :)
        </p>
      </div>

      <div className="technical_sheet">
        <h2>Technical Sheet </h2>
        <hr />
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Passport.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="card_logo">
        <h1> HOME</h1>
        <Link to="/">
          <img
            className="mario_logo_card"
            src={marioLogo}
            alt="mario logo card"
          />
        </Link>
      </div>
    </div>
  );
}

export default MemoSection;
