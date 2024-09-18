import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <div className="hello fadeIn">
          Hello, my name is
        </div>
        <div className="myName fadeIn">
          Teresa Nguyen.
        </div>
        <div className="subTitle">
          <Typed strings={['Researcher.', 'Developer.', 'Engineer.', 'Tech Enthusiast.', 'Dog Lover.']} typeSpeed={40} backSpeed={50} loop startDelay={1500} />
        </div>
        <div className="introPara fadeIn">
          I currently am a <span className="highlightColor">Yale</span> student studying statistics, data science, and computer science. My interests lie in healthcare technology and technology in general, where I aim to leverage engineering to <span className="highlightColor">enhance</span> and <span className="highlightColor">transform</span> lives.
        </div>
        <a href="https://drive.google.com/file/d/1WnUB9N74e7anSMKN5F8iNx48p2jUvXxz/view?usp=sharing" className="btn">Resume</a>
      </div>
    </section>
  );
}

export default Home;




