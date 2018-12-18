import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/project_info.css";

import simon from "../assets/img/Simon_nonUser.gif";
import marioLogo from '../assets/img/mgm_logo.svg'

function MemoSection() {
  return (
    <div className="main_container">
      <div className="title_card">

        <h1>Memo | Simon Game</h1>
       
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
          libero corporis dolorem amet harum, odio{" "}
        </h2>
      </div>

      <div className="image_container">
        <button className="visit_btn">
          <i className="fa fa-external-link" aria-hidden="true" />
          visit the website
        </button>
        <img className="img_carousel" src={simon} alt="carousel" />
      </div>

      <div className="about_project">
        <h2>About this project</h2>
        <hr />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          praesentium neque earum. Ipsam, nam alias consequuntur praesentium
          mollitia ullam animi aliquid, autem dolorum nemo iusto assumenda
          aliquam voluptates ut accusantium.
        </p>
      </div>

      <div className="technical_sheet">
        <h2>Technical Sheet </h2>
        <hr />
        <ul>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
          <li>Reactsj</li>
        </ul>

      </div>
      <div className="card_logo">
       <h1> HOME</h1> 
          <Link to="/">
            <img className="mario_logo_card" src={marioLogo} alt="mario logo card" />
          </Link>
      </div>
    </div>
  );
}

export default MemoSection;
