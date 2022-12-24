import React, { useState } from 'react'
import ServicesApi from './../../Api/ServicesApi'
import './Services.css'
import ComponentModal from '../Modal/Modal';
import Button from 'react-bootstrap/Button';

const Services = () => {
  const [serviceData, setServiceData] = useState(ServicesApi);
  const [modalShow, setModalShow] = useState(false);

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
                    const { id,logo, title, description } = curElem;
                    return (
                      <div class="col-lg-4 col-xs-12 text-center" key={id}>
				<div class="box">
                    <i class={logo} aria-hidden="true"></i>
					<div class="box-title">
						<h3>{title}</h3>
					</div>
					<div class="box-text">
						<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
					</div>
					<div class="box-btn">
          <Button variant="primary" onClick={() => setModalShow(true)}> Learn More </Button>
      <ComponentModal  show={modalShow} onHide={() => setModalShow(false)} title={title}/>

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