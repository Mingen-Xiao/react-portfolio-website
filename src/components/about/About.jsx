/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about-photo.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>~50 Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p className="summary">
            • Boasting 3 years of dedicated full-stack development experience, I
            specialize in architecting and implementing sophisticated software
            solutions. My expertise encompasses a detailed grasp of web
            solutions architecture and cutting-edge development technologies,
            driving successful project development with a confident commitment
            to innovation.
          </p>
          <p className="summary">
            • In addition to my technical skills, I am a
            results-oriented team member known for an agile and adaptable
            approach that efficiently integrates with diverse project management
            styles. My leadership extends to roles as a company director and
            store manager, showcasing a proven track record of effective
            management and leadership capabilities.
          </p>

          <a href="#contact" className="btn btn-primary lets-talk">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
