import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>User persona creation</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>UX research (Behavioral & Attidunal)</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Empathy map</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>User Story and sitemap</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>low and high fidelity wireframe</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Design Specification / Component creation</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Follow atomic design by Brad Frost</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Prototype (POC in actual system or in XD/Figma)</p>
            </li>
          </ul>
        </article>
        {/* END OF UI */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Full stack development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Full-Service Design and Development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Continuous support and evolution</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Various experiences on Ecommerce, Web and Desktop Applications
              </p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Small to mid sized business digital transformation</p>
            </li>
          </ul>
        </article>
        {/* END OF Web dev */}
        <article className="service">
          <div className="service__head">
            <h3>Procedural tools and helpers</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>GitHub</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Agile Scrum</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>NPM</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Material UI and Bootstrap</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Netlify</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Jenkins</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
