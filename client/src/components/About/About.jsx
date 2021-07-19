import React from 'react';
import git from './img/git.png';
import inL from './img/in2.png';
import './About.css';

export default function About() {

  return (
    <div className="about">
        <h2>By Sebastián E. Tassone</h2>
        <h3>Contact me:</h3>
        <div className="AboutImgs">
          <a href="https://www.linkedin.com/in/tassone-seb/" target="_blank" rel="noreferrer">
            <img className="fadein" src={inL} alt="" />
          </a>
          <a href="https://github.com/sbs001" target="_blank" rel="noreferrer">
            <img className="fadein" src={git} alt="" />
          </a>
        </div>
    </div>
  )
}