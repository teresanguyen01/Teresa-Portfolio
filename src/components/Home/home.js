import React from 'react';
import './home.css';

export const Home = () => {
  return (
    <section id="home">
        <div className="homeContent">
            <span className="hello">Hello, my name is</span>
            <span className="myName">Teresa Nguyen.</span>
            <span className="subTitle">Researcher, Developer, Engineer</span>
            <span className="introPara">I currently am a <span className="highlightColor">Yale</span> student studying statistics, data science, and computer science. My passion lies in healthcare technology, where I aim to leverage engineering to <span className="highlightColor">enhance</span> and <span className="highlightColor">transform</span> lives.</span>
            <a href="https://drive.google.com/file/d/1pQzWNzZ8uxveQasjbXoQbroWM7fx2vPa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="btn">Resume</button>
            </a>
            </div>
    </section>
  )
}

export default Home;
