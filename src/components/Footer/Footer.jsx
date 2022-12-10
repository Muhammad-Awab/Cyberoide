import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>

<div class="container ">
  <footer class="py-5 ">
    <div class="row ">
      <div class="col-3 ">
        <h5 className='footer-head'>Links</h5>
        <ul class="nav flex-column ">
          <li class="nav-item mb-2 "><a href="/#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#services" class="nav-link p-0 text-white">Services</a></li>
          <li class="nav-item mb-2"><a href="#portfolio" class="nav-link p-0 text-white">Projects</a></li>
          <li class="nav-item mb-2"><a href="#contact" class="nav-link p-0 text-white">Contact</a></li>
          <li class="nav-item mb-2"><a href="#about" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-3">
        <h5 className='footer-head'>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-white">Developers</a></li>
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Contact Us</h5>
          <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="text-white " href="/#"><AiOutlineTwitter className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><AiFillLinkedin className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsFacebook className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsInstagram className='icon'/></a></li>
      </ul>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer