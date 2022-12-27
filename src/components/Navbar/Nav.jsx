import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <header class="header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <a class="navbar-brand" href="/#">
            <strong class="h6 mb-0 font-weight-bold text-uppercase">Cyberiod.</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="container navbar-contact">
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item "><a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#">Gallery</a></li>
                </ul>
            </div>
        </div>
        <button type="button" class="btn btn-primary d-none d-xl-block d-xxl-none">Contact</button>
    </nav>
</header>
  )
}

export default Nav