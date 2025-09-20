import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    emailjs.sendForm('service_i20mh9h', 'template_u125vjk', e.target, 'aSX2n8Z2jbZB4J0E5')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setIsSending(false);
        e.target.reset(); // Clear the form
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-header">Get In Touch</h2>
      <p className="contact-description">
        I'm currently open to new opportunities. Feel free to send me a message!
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="status-message success">Message sent successfully!</p>}
        {status === 'error' && <p className="status-message error">Failed to send message. Please try again later.</p>}
      </form>
    </section>
  );
}

export default Contact;