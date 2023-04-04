import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
// import Typical from 'react-typical'

// const steps = [
//     'React developer', 3000,
//     'Devops Engineer ', 3000,
//     'DevSecOps Engineer', 4000,
//     'Web Developer', 3000,
   
//   ];
const Header = () => {
  return (
  

    <section className="container main-hero-contaier">
<div className="row  header-main">
    <div className="col-10 col-lg-6  d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
        <h1 className='display-4 header-heading'>
            Hi  I am a 
            <br/> 
            <span className='typical-header'>
            {/* <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} /> */}
            Web Developer
            </span>
        </h1>
        <p className='main-hero-para'> <b> <span className='text-primary' >CYBEROIDE</span> </b> one of the effecient product development organization, has collaborated with numerous corporations and start-ups to develop exceptional products and experiences while providing best solutions to their most challenging problems.</p>
        <Link class="btn btn-primary "  to="/contact" role="button">Contact Us</Link>
        {/* Main Header Right side */}
    </div>
       <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images " >
        <img src="assests/headerimg1.png" alt="heroimg" className='img-fluid main-hero-img2'/>
        </div>    
</div>
    </section>

    
  )
}


export default Header
