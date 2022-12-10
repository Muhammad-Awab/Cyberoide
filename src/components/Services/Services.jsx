import React, { useState } from 'react'
import ServicesApi from './../../Api/ServicesApi'
import './Services.css'
const Services = () => {
  const [serviceData, setServiceData] = useState(ServicesApi);
  return (
    <>

      <section id='services' class="wrapper mt-5">
        <div class="container-fostrap ">
          <div>
            <h1 class="heading">
              Services
            </h1>
          </div>
          <div class="content mt-5">
            <div class="container">
              <div class="row">
                {
                  serviceData.map((curElem) => {
                    const { id,logo, title, description } = curElem;
                    return (
                      <div class="col-xs-12 col-sm-4" key={id}>
                        <div class="card">
                          <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                            <img className='img-set' src={logo} alt="Pic does not shown" />
                          </a>
                          <div class="card-content">
                            <h4 class="card-title">
                              <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">{title}
                              </a>
                            </h4>
                            <p class="">
                              {description}
                            </p>
                          </div>
                          <div class="card-read-more">
                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                              Read More
                            </a>
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