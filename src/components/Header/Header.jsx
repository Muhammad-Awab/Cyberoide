import React from 'react'
import './Header.css'
import Typical from 'react-typical'

const steps = [
    'React developer', 3000,
    'Devops Engineer ', 3000,
    'DevSecOps Engineer', 4000,
    'Web Developer', 3000,
   
  ];
const Header = () => {
  return (
  

    <section className="container main-hero-contaier">
<div className="row  header-main">
    <div className="col-10 col-lg-6  d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
        <h1 className='display-4 header-heading'>
            Hello  I am a 
            <br/> 
            <span className='typical-header'>
            <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
            </span>
        </h1>
        <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur, nulla suscipit vitae iusto, libero, ut aperiam ipsa aut dicta accusamus.</p>
        <button type="button" class="btn btn-primary">Contact US</button>
        {/* Main Header Right side */}
    </div>
       <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-last order-sm-last" >
        <img src="assests/headerimg1.png" alt="heroimg" className='img-fluid main-hero-img2'/>
        </div>    
</div>
    </section>

    
  )
}


export default Header
