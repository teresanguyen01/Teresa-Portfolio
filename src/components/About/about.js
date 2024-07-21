import React from 'react';
import './about.css';
import TeresaPhoto from '../../assets/teresapic.png';

const About = () => {
  return (
    <div id="about">
      <img src={TeresaPhoto} alt="Teresa" className="myPhoto" />
      <div className="aboutText">
        <h1 className="aboutTitle">02. About Me</h1>
        <div className="aboutDesc">
          <p>Hello! My name is Teresa, and I'm currently a student at Yale, originally from Southern California, studying statistics, data science, and computer science. I have a passion for building programs that enhance efficiency and automation.</p>
          <p>Previously, I worked in cancer biology and nano-materials laboratories, focusing on carbon quantum dot synthesis to improve silicone polymers in manufacturing, and exploring the correlations between XIST genes and colorectal cancer to study gender differences. Although I found these fields fascinating, I discovered a deeper interest in the computational and analytical aspects, leading me to pivot towards computer science.</p>
          <p>My goal is to leverage my computational skills to make a positive impact on society, particularly in healthcare technology. In my free time, I enjoy reading mystery novels, rock climbing, and cooking with hopes of taking my family to Flavortown someday!</p>
        </div>
      </div>
    </div>
  );
}

export default About;

