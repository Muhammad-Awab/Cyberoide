import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <div className='Projects' id='about'>
        
        <h1 className='text-center pt-5 mt-4 '>Some count that matters</h1>
        <h3 className='text-center mt-3 project-heading-2'>our achievement in the journey depicted in numbers</h3>

        <section id="counter" class="sec-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">126</p>
						<h4>Happy Clients</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">535</p>
						<h4>Awards</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">896</p>
						<h4>Total Hours</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">777</p>
						<h4>Projects Complete</h4> </div>
				</div>
			</div>
		</div>
	</section>



        </div>
  )
}

export default Project