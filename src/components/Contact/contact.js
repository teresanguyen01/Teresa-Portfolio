import React, { useRef, useEffect } from 'react';
import './contact.css';
import GithubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const contactRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ajbf31o', 'template_mu4ap6t', form.current, {
                publicKey: 'ujJZxIn7lw0SmTtwP',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email sent!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

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

        const contactSection = contactRef.current;
        if (contactSection) {
            const children = contactSection.querySelectorAll('.fadeElement');
            children.forEach((child) => observer.observe(child));
        }

        return () => {
            if (contactSection) {
                const children = contactSection.querySelectorAll('.fadeElement');
                children.forEach((child) => observer.unobserve(child));
            }
        };
    }, []);

    return (
        <section id="contact" ref={contactRef}>
            <div id="contactContent">
                <h1 className="contactPageTitle fadeElement">05. Contact Me</h1>
                <span className="contactDesc fadeElement">Contact me regarding any opportunities, potential projects, or just to chat! I’ll try my best to respond to your email.</span>
                <form className="contactForm fadeElement" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="contactInput" placeholder="Your Name" name='your_name' />
                    <input type="email" className="contactInput" placeholder="Your Email" name='your_email' />
                    <textarea className="contactMessage" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
                <div className="links fadeElement">
                <a href="https://github.com/teresanguyen01" target="_blank" rel="noopener noreferrer">
                  <img src={GithubIcon} alt="Github" className="linkIcon" />
                </a>
                <a href="https://www.linkedin.com/in/teresaanguyenn/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn" className="linkIcon" />
                </a>
                <a href="https://www.instagram.com/teresaknowin/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" className="linkIcon" />
                </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;

