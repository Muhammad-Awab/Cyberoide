import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (

<>
   <section>

    <div className='footer-section mt-5'>
      <div className='footer-part'>
        <h3 className='footer-logo'>Cyberoide</h3>
        <p>Revamp the tech framework with creative ideas to deliver breathtaking user experience at a glance. We aims to redesign your digital journey by  providing customized development solutions according to your need.</p>
      </div>
      
      <div className=' footer-part'>
       <h3>Services</h3>
       <p>Custom Application Development</p>
       <p>Application Security Testing</p>
       <p>Software Quality Assurance</p>
       <p>Technical Recruitment</p>
       <p> Content Writing</p>
       <p>DevSecOps</p>
       
      </div>

      <div className='footer-part'>
       <h3>Quick Links </h3>
      <p> <a href='/' className='quick-links'>Home</a></p> 
      <p  className='mt-1'> <a href='#services'>Services</a> </p>
     <p className='mt-1'>  <a href='#portfolio'>Porfolio</a> </p>
      <p> <Link to="/about">About Us </Link></p>
       <p className='mt-1'>Gallery</p>
      </div>

       <div className='footer-part'>
       <h3>Contact Us</h3>
       <p>info@cyberoide.tech</p>
       <p>+92-308-316-2302</p>
       
       <form>
          <ul class="list-unstyled d-flex icon-f">
        <li class="ms-3"><a class="text-white " href="/#"><AiOutlineTwitter className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><AiFillLinkedin className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsFacebook className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsInstagram className='icon'/></a></li>
      </ul>
        </form>
      </div>
    </div>
   </section>

   <section className='border-top footer-base'>
   <p class="text-center mt-4">© 2023 Cyberoide. All rights reserved.</p>
   </section>
   </>
  )
}

export default Footer