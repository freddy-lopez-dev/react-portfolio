import React from 'react';
import './about.css';
import ME from '../../assets/ME.jpg';
import { MdWork } from 'react-icons/md';
import { CgOrganisation } from 'react-icons/cg';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="profilepic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            <article className="about__card">
              <CgOrganisation className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            consequatur eligendi? Pariatur, blanditiis? Facilis placeat a
            maiores, omnis recusandae alias veritatis explicabo ab,
            reprehenderit sapiente dolores eligendi tenetur? Perspiciatis,
            distinctio.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
