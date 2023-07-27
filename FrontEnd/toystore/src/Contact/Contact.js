import React, { useState } from 'react';
import axios from 'axios';
import '../Contact/Contact.css'
import NavBar from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the form data using Axios
    axios.post('http://localhost:8090/feedback/add', formData)

      .then((response) => {
        console.log('Form data posted successfully:', response);
        alert("Feedback added")
        navigate("/");
        // Add any success handling you want here
      })
      .catch((error) => {
        console.error('Error posting form data:', error);
        // Add any error handling you want here
      });
  };

  return (
    <>
    <NavBar/>

<section className="contact-form">
  <h2 style={{ marginTop: '30px' }}>Send us a message</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
    <br></br>

    <button type="submit">Send Message</button>
  </form>
</section>

{/* // ... rest of the code ... */}
</>

  );
}
