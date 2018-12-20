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
          Struggling when choosing a movie? Want to manage the movies you watch?{" "}
        </h2>
      </div>

      <div className="image_container">
        <a
          href="https://xmovieapp.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          This project came from my personal love for the art of movies and my
          inability to make a fast decision to watch or re-watch a movie with
          the endless choices we have from streaming service providers. It
          started as simple UI to present a random movie on the click on button
          but soon after I realized I could use it to also save and manage
          movies the title that I’d like to watch in the future.
        </p>
      </div>

      <div className="technical_sheet">
        <h2>Technical Sheet </h2>
        <hr />
        <ul>
          <li>UI/UX Design</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Styled-components</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express</li>
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
