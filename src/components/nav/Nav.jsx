import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { FaBrain } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href="/#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <FaBrain />
      </a>
      <a href="#services">
        <MdDesignServices />
      </a>
      <a href="#contact">
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;
