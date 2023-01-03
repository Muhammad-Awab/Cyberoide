import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const data=[
    {
      id:1,
      image:"assests/portfolio7.jpg",
      title:'Resturant Food Delievery',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    },
    {
      id:2,
      image:"assests/portfolio3.jpg",
      title:'Pizza Delievery Website',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    },
    {
      id:3,
      image:"assests/portfolio2.jpg",
      title:'Car Showroom Website',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    },
    {
      id:4,
      image:"assests/portfolio4.jpg",
      title:'Todos Item List Website',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    },
    {
      id:5,
      image:"assests/portfolio6.jpg",
      title:'Live Country Weather Website',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    },
    {
      id:6,
      image:"assests/portfolio5.jpg",
      title:'This is the portfolio item title',
      gitub:'https://github.com',
      demo:'https://dribbble.com/shots/18603080-MyStudio-Dashboard-Studio-Management'
    }
  ]
  return (
    <section id="portfolio" className='mt-5 mb-5'>
        <h2 className='text-center'>Portfolio</h2>
        <div className="container portfolio_container">
          {
 data.map((item)=>{
  return(
  <article key={item.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={item.image} alt="" />
                </div>
                    <h3>{item.title}</h3>
                    <div className="porifolio_item-cta">
                    {/* <a href={item.gitub} className='btn' target='_blank' rel="noreferrer">Gitub</a> */}
                    <a href='/' className='btn btn-primary' target='_blank' rel="noreferrer">View Site</a>
                    </div>
            </article>
  )})           
        
}
        </div>
    </section>
  )
}

export default Portfolio
