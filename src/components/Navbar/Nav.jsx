import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
  return (
    <>
    
    <header class="header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <Link class="navbar-brand" to="/">
            <strong class="h6 mb-0 font-weight-bold text-uppercase">Cyberoide.</strong></Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="container navbar-contact">
            <div class="collapse navbar-collapse header-nav" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto header-nav-list">
                    <li class="nav-item "><Link class="nav-link"  href="" to="/" >Home <span class="sr-only">(current)</span></Link></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio" >Portfolio</a></li>
                    <li class="nav-item"><Link class="nav-link" to="/#" >Gallery</Link></li>
                </ul>
            </div>
        </div>
        {/* <NavLink className="nav-link" to="/contact">Contact</NavLink> */}
      
        {/* <Nav.Link as={Link} to="/contact">Home</Nav.Link> */}
      
        {/* <button type="button" class="btn btn-primary d-none d-xl-block d-xxl-none" >Contact</button> */}
        <Link class="btn btn-primary d-none d-xl-block d-xxl-none" to="/contact" role="button">Contact</Link>
    </nav>
</header>
</>
  )
}

export default Nav