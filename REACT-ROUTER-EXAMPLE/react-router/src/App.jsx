import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import './styles.css'; 
import Contact from './components/Contact';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <div className='navbar'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
