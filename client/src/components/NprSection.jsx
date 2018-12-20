import React from "react";
import { Link } from "react-router-dom";

import marioLogo from "../assets/img/mgm_logo.svg";
import nprScraper from "../assets/img/NPR_Scraper.gif";

function NprSection() {
  return (
    <div className="main_container">
      <div className="title_card">
        <h1>NPR Scraper</h1>
        <h2>News Scraper with Mongo DB and Cheerios </h2>
      </div>

      <div className="image_container">
        <a
          href="https://npr-scraper2017.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="visit_btn">
            <i className="fa fa-external-link" aria-hidden="true" />
            visit the website
          </button>
        </a>
        <img className="img_carousel" src={nprScraper} alt="carousel" />
      </div>

      <div className="about_project">
        <h2>About this project</h2>
        <hr />

        <p>
          A CRUD application that scrapes articles from other website allowing
          the user to save, comment and delete the same.
        </p>
      </div>

      <div className="technical_sheet">
        <h2>Technical Sheet </h2>
        <hr />
        <ul>
          <li>Cheerio</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>HandleBars</li>
          <li>Express</li>
          <li>HTML5</li>
          <li>CSS3</li>
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

export default NprSection;
