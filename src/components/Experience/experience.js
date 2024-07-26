import React, { useEffect, useRef, useState } from 'react';
import './experience.css';

const jobs = [
  {
    name: 'Medtronic',
    positions: [
      {
        title: 'Software Engineer Intern',
        period: 'June 2024 - August 2024',
        details: [
          'Developed a chatbot prototype for the Medtronic surgical robot using Large Language Models (LLMs)',
          'Enhanced log analysis tool effectiveness by 10% by implementing over 10 algorithms for efficient debugging of surgical robot issues, working within a Scrum team to deliver robust solutions',
          'Architected a PowerBI database, significantly improving the issue triage process and classification accuracy'
        ]
      }
    ]
  },
  {
    name: 'YSM: Smart Medicine Lab',
    positions: [
      {
        title: 'Machine Learning Research Assistant',
        period: 'January 2023 - Present',
        details: [
          'Developed machine learning models such as artificial neural networks, logistic regression, Naive Bayes, random forest, and SVMs using TensorFlow and Scikit-learn to predict lung cancer risk from personal health data, significantly enhancing predictive accuracy and model reliability.',
          'Performed data cleansing on dense clinical datasets using R and Python, applying KNN imputation, mean imputation, and normalization techniques to enhance data quality and model performance.'
        ]
      }
    ]
  },
  {
    name: 'Wright Laboratory',
    positions: [
      {
        title: 'Program Development Student Assistant',
        period: 'June 2022 - August 2022',
        details: [
          'Spearheaded the development and management of multimedia resources, significantly increasing engagement and edited video content for lectures and events, incorporating graphic elements and interactive features',
          'Utilized advanced Excel functions, such as pivot tables and complex formulas, to analyze and interpret data on program demographics and event trends, leading to a more targeted marketing approach'
        ]
      }
    ]
  },
  {
    name: 'XCentium',
    positions: [
      {
        title: 'Data Analyst and Marketing Intern',
        period: 'August 2022 - August 2023',
        details: [
          'Communicated with the marketing team and clients to deliver recommendations regarding company-consumer interaction, such as ways to improve clicks by analyzing direct and organic searches',
          'Produced over 15 analytic reports, recommending activities for bounce rates, click-through rates, and impressions based on statistics from Google Analytics, HubSpot, and Search Console, improving market presence'
        ]
      }
    ]
  },
  {
    name: 'UCI: Kong Lab',
    positions: [
      {
        title: 'Cancer Research Assistant',
        period: 'June 2023 - August 2023',
        details: [
          'Dissected research papers in colorectal cancer experimentation as well as presented takeaways to the research team to decide the next steps after correlations between the XIST gene and lowering tumor growth',
          'Collaborated with undergrads, PhDs, postdocs, and professors as a high school student to help progress the entire research development lifecycle, including implementation of research and analysis',
          'Established a method of knocking down the XIST gene using lentivirus transfection to use xenograft in mice'
        ]
      }
    ]
  },
  {
    name: 'CSULB: Shon Lab',
    positions: [
      {
        title: 'Nanomaterials/Materials Science Research Assistant',
        period: 'June 2022 - March 2023',
        details: [
          'Analyze the synthesis of carbon quantum dots in fluorescent materials using Fourier Transform Infrared Spectroscopy, improving manufacturing industry polymers by making tears and damages more easily detectable',
          'Built a computer program that automatically calculated the weights of reactants and products before and after chemical reactions (stoichiometry) using Java, resulting in an increase in the speed of research development'
        ]
      }
    ]
  }
];

export const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(jobs[0]);
  const experienceRef = useRef(null);

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

    const experienceSection = experienceRef.current;
    if (experienceSection) {
      const children = experienceSection.querySelectorAll('.fadeElement');
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (experienceSection) {
        const children = experienceSection.querySelectorAll('.fadeElement');
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <span className="experienceTitle fadeElement">03. Experience</span>
      <div className="experienceContent fadeElement">
        <div className="experienceLeft">
          {jobs.map((job, index) => (
            <p
              key={index}
              className={activeCompany.name === job.name ? 'activeJob' : ''}
              onClick={() => setActiveCompany(job)}
            >
              {job.name}
            </p>
          ))}
        </div>
        <div className="experienceRight">
          {activeCompany.positions.map((position, index) => (
            <div className="job fadeElement" key={index}>
              <h3>{position.title}</h3>
              <p>{position.period}</p>
              <ul>
                {position.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;


