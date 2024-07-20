import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled webdesigner yah yah yahr.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Demo text blah blah blah</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Blah Blah</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Blah blah blah</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
