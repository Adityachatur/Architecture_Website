import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbars/Navbar';
import Main from './Components/MainPages/Main';
import About from './Components/AboutPages/About';
import Footer from './Components/Navbars/Footer';
import Service from './Components/ServicePages/Service';
import Contact from './Components/ContactPages/Contact';
import './App.css'
import MainProjectPage from './Components/Projects/MainProjectPage';
import ScrolltoTop from './Components/SubPages/ScrolltoTop';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrolltoTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<MainProjectPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
