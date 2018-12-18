import React from "react";
import { Link } from "react-router-dom";

import marioLogo from "../assets/img/mgm_logo.svg";
import xmovieapp from "../assets/img/xmovie_project.gif";

function XmovieSection() {
  return (
    <div className="main_container">
      <div className="title_card">
        <h1>XMovie</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
          libero corporis dolorem amet harum, odio{" "}
        </h2>
      </div>

      <div className="image_container">
        <a href="https://xmovieapp.herokuapp.com/">
          <button className="visit_btn">
            <i className="fa fa-external-link" aria-hidden="true" />
            visit the website
          </button>
        </a>

        <img className="img_carousel" src={xmovieapp} alt="carousel" />
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

export default XmovieSection;
