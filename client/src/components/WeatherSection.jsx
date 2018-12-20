import React from "react";
import { Link } from "react-router-dom";

import marioLogo from "../assets/img/mgm_logo.svg";
import weatherapp from "../assets/img/weatherapp.gif";

function WeatherSection() {
  return (
    <div className="main_container">
      <div className="title_card">
        <h1>Weather App</h1>
        <h2>A Weather App built on react JavaScript </h2>
      </div>

      <div className="image_container">
        <a
          href="https://weatherappmariobros.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="visit_btn">
            <i className="fa fa-external-link" aria-hidden="true" />
            visit the website
          </button>
        </a>
        <img className="img_carousel" src={weatherapp} alt="carousel" />
      </div>

      <div className="about_project">
        <h2>About this project</h2>
        <hr />

        <p>
          A basic web application for searching present local weather conditions
          and forecast for the following week. The idea was to remake and
          redesign a Weather app that I built a few years back using Vanilla JS
          but now using React.js and other modern web technologies.
        </p>
      </div>

      <div className="technical_sheet">
        <h2>Technical Sheet </h2>
        <hr />
        <ul>
          <li>React.js</li>
          <li>Redux</li>
          <li>React-Router</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Axios</li>
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

export default WeatherSection;
