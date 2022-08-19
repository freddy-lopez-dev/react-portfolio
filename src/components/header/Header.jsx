import React from 'react';
import CTA from './CTA';
import './header.css';
import Social from './Social';
/*insert image of me on me div*/
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Frederick Lopez</h1>
        <h5 className="text-light">UI/UX Designer / Software Developer</h5>
        <CTA />
        <Social />
        <div className="me"></div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
