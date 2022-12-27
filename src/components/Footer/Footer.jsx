import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (

<>
   <section>

    <div className='footer-section mt-5'>
      <div className='footer-part'>
        <h3 className='footer-logo'>Cyberoide</h3>
        <p>Lorem, ipsum dolor sit amet consectetur
           adipisicing elit.</p>
      </div>
      
      <div className=' footer-part'>
       <h3>Services</h3>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
      </div>

      <div className='footer-part'>
       <h3>Company</h3>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
       <p>Product Developmen</p>
      </div>

       <div className='footer-part'>
       <h3>Contact Us</h3>
       <p>info@cybriod.com</p>
       <p>+9232234234</p>
       
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
   <p class="text-center mt-4">© 2021 Cyberiod. All rights reserved.</p>
   </section>
   </>
  )
}

export default Footer