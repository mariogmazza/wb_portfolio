import React, { Component } from "react";
import "../../assets/css/landingpage.css";
import { Link } from "react-router-dom";

import marioLogo from "../../assets/img/mgm_logo.svg";
import github from "../../assets/img/github-logo.svg";
import linkedin from "../../assets/img/linkedin-button.svg";
import emailLogo from "../../assets/img/at.svg";

import npr_project from "../../assets/img/NPR_Scraper.gif";
import simon_project from "../../assets/img/Simon_nonUser.gif";
import xmovie_project from "../../assets/img/xmovie_project.gif";
import weatherapp_project from "../../assets/img/weatherapp.gif";

class Landingpage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main_layout">
          <div className="side_menu">
            <Link to="/">
              <img className="mario_logo" src={marioLogo} alt="mario logo 1" />
            </Link>

            <img className="link_img" src={github} alt="github link" />
            <img className="link_img" src={linkedin} alt="linkedin link" />
            <img className="link_img" src={emailLogo} alt="email img" />
          </div>

          <div className="content">
            <img className="mario_logo2" src={marioLogo} alt="mario logo 2" />
            <div className="title">
              <h1>Mario</h1>
              <div className="job_title">Full-Stack Developer</div>
            </div>

            <div className="colm1">
              <div className="background">
                <div className="secs">BACKGROUND</div>
                <p>
                  Lorem ipsum dolor, sit aconsectetur adipisicing elit.
                  Aperiam dolores obcaecati alias iste amet ipsa quod dolorem
                  ratione reprehenderit? Facilis incidunt minus voluptas aliquid
                  distinctio accusamus voluptatibus, beatae maxime porro!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident quas repellendus, sit vero fugiat rerum similique
                  qui recusandae nisi doloribus! Dignissimos quasi esse dolor
                  provident vitae in inventore eveniet velit!
                </p>
              </div>

              <div className="goals">
                <div className="secs">GOALS</div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  praesentium neque earum. Ipsam, nam alias consequuntur
                  praesentium mollitia ullam animi aliquid, autem dolorum nemo
                  iusto assumenda aliquam voluptates ut accusantium.
                </p>
              </div>

              <div className="motivation">
                <div className="secs">MOTIVATION</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  aut illo nihil expedita reprehenderit in impedit sit maxime
                  tempora velit perferendis alias ipsam eveniet, sunt
                  repellendus a. Quasi, quidem voluptates?
                </p>
              </div>
            </div>

            <div className="colm2">
              <div className="frustrations">
                <div className="secs">FRUSTRATIONS</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque autem maiores inventore laboriosam veniam cumque
                  asperiores fugit rem labore, reprehenderit nulla iusto facere
                  minima tenetur dolorem pariatur aperiam aliquam doloremque!
                </p>
              </div>

              <div className="projects">
                <div className="secs">PROJECTS</div>

                <div className="img__cont">
                  <div className="pic_cont">
                    <img src={xmovie_project} alt="Avatar" className="image" />

                    <div className="overlay">
                      <Link to="/xmovie">
                        <div className="text">Learn more</div>
                      </Link>
                    </div>
                  </div>

                  <div className="pic_cont">
                    <img
                      src={weatherapp_project}
                      alt="Avatar"
                      className="image"
                    />

                    <div className="overlay">
                      <Link to="/weatherapp">
                        <div className="text">Learn more</div>
                      </Link>
                    </div>
                  </div>

                  <div className="pic_cont">
                    <img src={simon_project} alt="Avatar" className="image" />

                    <div className="overlay">
                      <Link to="/memo">
                        <div className="text">Learn more</div>
                      </Link>
                    </div>
                  </div>

                  <div className="pic_cont">
                    <img src={npr_project} alt="Avatar" class="image" />

                    <div className="overlay">
                      <Link to="/npmscraper">
                        <div className="text">Learn more</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills">
                <div className="secs">SKILS</div>

                <div className="row">
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">JavaScript</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">HTML5</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">CSS3</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">React.js</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">Git</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">Node.js</div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">MongoDB</div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card_skills">
                      <div className="skills-text">Express.js</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landingpage;
