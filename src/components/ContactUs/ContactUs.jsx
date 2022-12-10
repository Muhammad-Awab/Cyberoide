import React from 'react'
import './ContactUs.css'
import  { useRef } from 'react'; //emailjs react website template
import  emailjs from "emailjs-com";
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_om67mll', 'template_0wwryso', form.current, 'u-XYTvIbVtz2HVSiT')
    e.target.reset();
  };
return (
    <section id='contact'>
      <h5 className='text-center mt-5'>Get in Touch</h5>
      <h2 className='text-center'>Contact US</h2>
      <div className="container contact_container">
       
        <form ref={form} onSubmit={sendEmail}>
         <input className='form-input' type="text" name='name' placeholder='Your Full Name' required />
         <input  className='form-input' type="email" name="email" placeholder='Your Email'  required/>
         <textarea  className='form-input' name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary mb-5'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
