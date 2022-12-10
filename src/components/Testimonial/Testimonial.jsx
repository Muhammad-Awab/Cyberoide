import React from 'react'
import './Testimonial.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data=[
  {
avatar:"assests/avatar1.jpg",
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:"assests/avatar2.jpg",
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:"assests/avatar3.jpg",
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  },
  {
avatar:"assests/avatar4.jpg",
name:'Tina Snow',
review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat maxime! Minima nobis ducimus cum veniam repudiandae voluptatibus atque distinctio possimus corporis ipsum nam adipisci similique consequuntur, modi nemo esse'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials" className='mt-5 pb-5'>
      <h5 className='text-center'>Review From Clients</h5>
      <h2 className='text-center'>Testimonials</h2>
      <Swiper className="container testimonials_container text-black"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
       {
        data.map((item,index)=>{
        return(  
          <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={item.avatar} alt="Avatar One" />
          </div>
            <h5 className='client_name'>{item.name}</h5>
            <small className='client_review'>{item.review}</small>
          </SwiperSlide>
          )  })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
