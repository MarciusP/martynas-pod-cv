import React from 'react';
import './ContactPage.scss';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the values of the input fields
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Use the fetch API to call the endpoint with a POST method and pass the data
    fetch('/test/endpoint', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });
  }

  return (
    <div className="contact-page-container">
      <form onSubmit={handleSubmit}>
        <div className="topInputs">
          <div>
            <label className="inputLabel">Name:</label>
            <br />
            <input type="text" name="name" className="input-field" />
          </div>
          <div>
            <label className="inputLabel">Email:</label>
            <br />
            <input type="text" name="email" className="input-field" />
          </div>
        </div>
        <br />
        <label className="inputLabel">Message:</label>
        <textarea
          name="message"
          className="message-field"
        />
        <br />
        <button type="submit" className="submitButton">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
