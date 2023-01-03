import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Nav from "../Navbar/Nav";
import { BsInstagram } from 'react-icons/bs';
import './AboutUs.css'
const AboutUs = () => {
  return (
    

<>
<Nav/>
<div class="container py-5">
    <div class="row text-center text-black">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Our Team</h1>
            <p class="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
            <p class="lead">Snippet by<a href="https://bootstrapious.com/snippets" class="text-black">
                <u>Bootstrapious</u></a>
            </p>
        </div>
    </div>
</div>


<div class="container ">
    <div class="row text-center">

        
    <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="assests/Awab.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="/#" class="social-link"><AiOutlineTwitter className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><AiFillLinkedin className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsFacebook className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsInstagram className='icon'/></a></li>
                </ul>
            </div>
        </div>

        
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="assests/Awab.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="/#" class="social-link"><AiOutlineTwitter className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><AiFillLinkedin className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsFacebook className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsInstagram className='icon'/></a></li>
                </ul>
            </div>
        </div>

        
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="assests/Awab.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="/#" class="social-link"><AiOutlineTwitter className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><AiFillLinkedin className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsFacebook className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsInstagram className='icon'/></a></li>
                </ul>
            </div>
        </div>

        
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="assests/Awab.jpeg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="/#" class="social-link"><AiOutlineTwitter className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><AiFillLinkedin className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsFacebook className='icon'/></a></li>
                    <li class="list-inline-item"><a href="/#" class="social-link"><BsInstagram className='icon'/></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>



  )
}

export default AboutUs