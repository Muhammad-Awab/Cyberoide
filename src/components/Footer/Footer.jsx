import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (


    <>
        <section class="border-top mt-5 ">
  
  <div class="container  pt-3">
        <div class="row">
            <div class="col-md-2 text-center">
               {/* @*<img src="/images/img.png" height="40"> */}

                <p class="text-secondary small">
                    ©2022 pkversity

                </p>
            </div>
            <div class="col-md-8 text-center text-secondary">
                <a href="aboutus" class="nav-link">About Us</a>
                <a href="/#" class="nav-link">Contact Us</a>
                <a href="/#" class="nav-link">Privacy Policy</a>
                <a href="/#" class="nav-link">FAQ</a>
                <a href="/#" class="nav-link">Partners</a>
                <div class="col-3 offset-sm-4">
        <form>
          <ul class="list-unstyled d-flex icon-f">
        <li class="ms-3"><a class="text-white " href="/#"><AiOutlineTwitter className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><AiFillLinkedin className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsFacebook className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsInstagram className='icon'/></a></li>
      </ul>
        </form>
      </div>
                <p class="small">© 2021 Company, Inc. All rights reserved.</p>
            </div>
        </div>
    </div>
</section>

   
     


    

  
    </>
  )
}

export default Footer