
import Home from './Home';
import React from "react";
import AboutUs from './components/About Us/AboutUs';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Nav from './components/Navbar/Nav';

import ContactUsPage from './components/ContactUsPage/ContactUsPage';
function App() {
  return (
    <>
  
    <BrowserRouter>
    
     <Routes>
     <Route path="/"  element={<Nav/>}/>
     <Route path="/about"  element={<AboutUs/>}/>
     <Route  index  element={<Home/>}/>
     <Route path='/contact' element={<ContactUsPage/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
