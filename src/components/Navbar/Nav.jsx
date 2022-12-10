import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-color navbar-dark">
  <div class="container-fluid">
    {/* <img src="assests/img.png" alt="" className='imag'/> */}
    <a class="navbar-brand" href="/#">Cyberiod.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">Projects</a>
        </li>
        
        
       
      </ul>
      <a href='#contact'>
        <button class="btn btn-outline-success" type="submit">Contact Us</button>
        </a>
    </div>
  </div>
</nav>
  )
}

export default Nav