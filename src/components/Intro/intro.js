import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Teresa</span> <br />Website Designer</span>
            <p className="introPara">I'm a web designer known for making nice interfaces</p>
            <Link><button className="btn"><img src="logo.png" alt="Hire" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;
