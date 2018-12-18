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
            <a
              href="https://github.com/mariogmazza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link_img" src={github} alt="github link" />
            </a>

            <a
              href="https://www.linkedin.com/in/mario-mazza/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <img
                className="link_img"
                src={linkedin}
                alt="linkedin link"
              />{" "}
            </a>
            <a
              href="mailto:mariomazza01@gmail.com?Subject=Hello%20again"
              target="_top"
            >
              <img className="link_img" src={emailLogo} alt="email img" />
            </a>
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
                  My journey as a developer started when as teen playing an
                  online game (Quake Arena :) I discovered I could mod my
                  characters attire and appearance then and there I was hooked.
                  I realized what a few lines of code could do. Later I got my
                  CompTIA A+ and CISCO CCENT certifications and so I began to
                  work as a independent computer technician for a few years.
                </p>
                <p>
                  While working as a computer tech and taking Computer
                  Engineering courses in college I discovered FreeCodeCamp an
                  online coding resource that changed my life it awoke my love
                  for web development and from that moment on I never looked
                  back. I soon completed my Front-End certification and few
                  months later I took the scariest and most exciting step in my
                  career and quit my stable and well paid job to boost my
                  chances to finally work on that which I love that is software
                  and took an immersive full-time Coding Bootcamp and I
                  graduated as a FULL-STACK DEVELOPER. I learned many
                  technologies but most important of all I learned how to learn
                  on my own.
                </p>
              </div>

              <div className="goals">
                <div className="secs">GOALS</div>
                <p>
                  My most recent goal is to finish reading the whole series of
                  books called “You don’t know JS”. I would love to also finish
                  a course on AI that I have already started. Also last but not
                  least is to find a company that is willing to take a chance in
                  someone that wholeheartedly loves the craft of software
                  development, understands his weaknesses and strives every day
                  to be a better developer.
                </p>
              </div>

              <div className="motivation">
                <div className="secs">MOTIVATION</div>
                <p>
                  What really drives me every day is the pursuit of knowledge
                  and not just in the field of software but I love Astronomy,
                  Astrophysics, Math and the whole STEM field. I love reading
                  and learning about new tech. I like doing more than talking. I
                  never “box” myself into any title or position. I have a
                  “whatever it takes” attitude when it comes to solving
                  technical challenges.
                </p>
              </div>
            </div>

            <div className="colm2">
              <div className="frustrations">
                <div className="secs">FRUSTRATIONS</div>
                <p>
                  Not enough time during the day to read my ever growing list of
                  Medium bookmarks. Having to sleep really takes time from
                  learning. Not enough “Dinero” to buy more books :( . Also not
                  having SKETCH for Linux or Windows, I guess for now AdobeXD on
                  windows will have to do.
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
                <div className="secs">SKILLS</div>

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
