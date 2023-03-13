import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './UI/Navbar';
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Tax from './Pages/Tax';
import Apply from './Pages/Apply';
import Portal from './Pages/Portal';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
  <Navbar />
<div className='app-cont'>
<Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/About" element={<About />}/>
    <Route path="/Tax" element={<Tax/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="Apply" element={<Apply/> }/>
    <Route path="/Portal" element={<Portal/>} />
</Routes>
</div>
 
   <Footer />
      
    </div>
  );
}

export default App;
