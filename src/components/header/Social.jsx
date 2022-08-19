import React from 'react';
import { BsLinkedin, BsSpotify, BsGithub } from 'react-icons/bs';

const Social = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/frederick-lopez-5a1a125b"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/freddy-lopez-dev"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://spotify.com" target="_blank" rel="noreferrer">
        <BsSpotify />
      </a>
    </div>
  );
};

export default Social;
