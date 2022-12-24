
import React from 'react'
import Nav from './components/Navbar/Nav'
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import Testimonial from './components/Testimonial/Testimonial';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  return (
    <>
      <Nav/> 
      <Header/>
      <Services/>
      <Portfolio/>
      {/* <Project/> */}
    <Testimonial/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
