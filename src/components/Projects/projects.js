import React, { useEffect, useRef, useState } from 'react';
import './projects.css';  // Ensure the path is correct
import HugoChatbot from '../../assets/chatbotproj.png';
import DatabaseProj from '../../assets/databaseproj.png';
import LungProj from '../../assets/lungproj.png';
import MarkovProj from '../../assets/markovproj.png';
import NanoProj from '../../assets/nanoproj.png';
import CancerProj from '../../assets/cancerproj.png';

// Pictures for the gallery
import Capsanthin from '../../assets/experience_proj/capsanthin.png';
import LungResults from '../../assets/experience_proj/Full Feature Rich Training.png';
import KnockingDownPoster from '../../assets/experience_proj/Knocking Down CRISPR.png';
import MarkovUI from '../../assets/experience_proj/markovinterface.png';
import SynthesisPoster from '../../assets/experience_proj/synthesishcd.png';

const galleryImages = [
  { src: SynthesisPoster, caption: "Presented at the Orange County Science Engineering Fair, which won 1st Place in Chemistry, the top project, and California Science Engineering Fair Finalist." },
  { src: Capsanthin, caption: "Capsanthin Project. Won the Orange County Beckman Legacy Award ($8000) and presented at the Arnold and Mabel Beckman Conference." },
  { src: LungResults, caption: "From my ongoing research project regarding using ML models to predict Lung Cancer. ROC Curve results from Feature Rich models." },
  { src: KnockingDownPoster, caption: "Analyzing XIST gene and its effects on Colorectal Cancer. Presented at University of California, Irvine Symposium." },
  { src: MarkovUI, caption: "Markov Chain project implemented using MATLAB. Shows all the gennerated graphs and a sneak peak of the command window with the printed information." },
  { src: Capsanthin, caption: "Capsanthin Project. Won the Orange County Beckman Legacy Award ($8000) and presented at the Arnold and Mabel Beckman Conference." },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target); // Unobserve after the animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const projectsSection = projectsRef.current;
    if (projectsSection) {
      const children = projectsSection.querySelectorAll('.fadeElement');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (projectsSection) {
        const children = projectsSection.querySelectorAll('.fadeElement');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div id="projects" ref={projectsRef}>
      <div className="projectsText fadeElement">
        <h1 className="aboutTitle fadeElement">04. Projects</h1>
        <h2 className="aboutSubtitle fadeElement">Work and Personal Projects</h2>
        <div className="projectContainer fadeElement">
          <div className="project">
            <img src={HugoChatbot} alt="Hugo Chatbot" className="projectImg" />
            <h3 className="projectTitle">Medtronic Hugo RAS Chatbot</h3>
            <p className="projectDesc">
              Developed a <span className="highlight">chatbot</span> prototype from scratch using retrieval-augmented generation chains built with <span className="highlight">LangChain</span>, <span className="highlight">ChromaDB</span>, and Gemma2 for the back-end, and implemented <span className="highlight">Gradio</span> for the front-end.
            </p>
          </div>
          <div className="project">
            <img src={DatabaseProj} alt="Portfolio Project" className="projectImg" />
            <h3 className="projectTitle">Teresa Nguyen's Personal Portfolio</h3>
            <p className="projectDesc">
                Designed and developed a <span className="highlight">React</span> website to showcase my projects, experience, and contact information, leveraging <span className="highlight">CSS</span> animations and <span className="highlight">IntersectionObserver</span> for a smooth user experience.
            </p>
          </div>
          <div className="project">
            <img src={LungProj} alt="Lung Cancer Project" className="projectImg" />
            <h3 className="projectTitle">Adaptive Neural Networks & ML Models for Lung Cancer Prediction</h3>
            <p className="projectDesc">
              Designed artificial <span className="highlight">neural networks</span> and evaluated other <span className="highlight">ML models</span>, including Naive Bayes and Logistic Regression, to develop a lung cancer prediction model (95% accuracy) while analyzing feature importance.
            </p>
          </div>
          <div className="project">
            <img src={MarkovProj} alt="Markov Chain Project" className="projectImg" />
            <h3 className="projectTitle">Mapping Labor Force Trends using a Markov Chain Calculator</h3>
            <p className="projectDesc">
              Produced a Markov chain calculator in <span className="highlight">MATLAB</span> capable of computing transition and probability matrices with user-friendly inputs, generating various graphs such as heatmaps and transition diagrams.
            </p>
          </div>
          <div className="project">
            <img src={NanoProj} alt="Nano-materials Project" className="projectImg" />
            <h3 className="projectTitle">Hydrophobic Carbon Dots (HCDs) & Fluorophores for Silicone</h3>
            <p className="projectDesc">
              Engineered a novel method for synthesizing hydrophobic carbon dots using microwave technology and built a <span className="highlight">Java-based</span> stoichiometry calculator to accelerate project development.
            </p>
          </div>
          <div className="project">
            <img src={CancerProj} alt="Cancer Biology Project" className="projectImg" />
            <h3 className="projectTitle">Pneumonia Detection Using Deep Learning</h3>
            <p className="projectDesc">
                Implemented a <span className="highlight">convolutional neural network (CNN)</span> using VGG16, fine-tuning on X-ray data to detect pneumonia. 
            </p>
          </div>
        </div>
        <div className="gallery fadeElement">
          <button className="galleryArrow left" onClick={prevImage}>❮</button>
          <div className="galleryImageContainer" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {galleryImages.map((image, index) => (
              <div className="gallerySlide" key={index}>
                <img 
                  src={image.src}
                  alt={image.caption}
                  className="galleryImage"
                />
                <p className="galleryCaption">{image.caption}</p>
              </div>
            ))}
          </div>
          <button className="galleryArrow right" onClick={nextImage}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;












