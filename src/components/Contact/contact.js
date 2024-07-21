import React, { useRef } from 'react';
import './contact.css';
import Medtronic from '../../assets/client.png';
import FacebookIcon from '../../assets/facebook.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef(); 
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
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientsDesc">
                I have worked with the following companies
            </p>
            <div className="clientImgs">
                <img src={Medtronic} alt="Client" className="clientImg" />
                <img src={Medtronic} alt="Client" className="clientImg" />
                <img src={Medtronic} alt="Client" className="clientImg" />
                <img src={Medtronic} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contactPage">
            <h1 className="contactPageTitle">
                Contact Me
            </h1>
            <span className="contactDesc">Please fill this out</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="text" className="email" placeholder="Your Email" name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact; 