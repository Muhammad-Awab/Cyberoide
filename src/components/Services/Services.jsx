import React, { useState } from 'react'
import ServicesApi from './../../Api/ServicesApi'
import { Link } from 'react-router-dom';
import './Services.css'


const Services = () => {
  const [serviceData] = useState(ServicesApi);


  return (
    <>

      <section id='services' class="wrapper mt-5">
        <div class="container-fostrap ">
          <div>
            <h1 class="heading text-center mt-4 mb-5">
              Services
            </h1>
          </div>
          <div class="social-box">
            <div class="container">
              <div class="row">
                {
                  serviceData.map((curElem) => {
                    const { id, logo, title, description } = curElem;
                    return (
                      <div class="col-lg-4 col-xs-12 text-center" key={id}>
                        <div class="box">
                          <i class={logo} aria-hidden="true"></i>
                          <div class="box-title">
                            <i class="fa-solid fa-grill-hot"></i>
                            <h3>{title}</h3>
                          </div>
                          <div class="box-text">
                            <span>{description}</span>
                          </div>
                          <div class="box-btn">
                            <Link class="btn btn-primary " to="/contact" role="button">Let's Connect</Link>


                          </div>
                        </div>
                      </div>
                    )
                  })
                }



              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services