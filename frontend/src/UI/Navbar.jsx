import React from 'react'
import { NavLink } from 'react-router-dom'
//import { Container } from '@material-ui/core';

import "./Navbar.css"
const Navbar = () => {
  return (
   <div className='nav-cont'>
   <div className='nav-logo'>
    <img src='https://totaldigitalprints.com/wp-content/uploads/2022/09/logo.png'/>
   </div>
  <div className='nav-ele'>
   <NavLink  to="/"
className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}
    >
    HOME
   </NavLink>

   <NavLink  to="/About"
   className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}>ABOUT</NavLink>
   <NavLink  to="/Tax" className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}>TAX</NavLink>
   <NavLink  to="/Contact" className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}>CONTACT</NavLink>

   
   <NavLink  to="/Apply" className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}>APPLY</NavLink>
   {/* <NavLink  to="/Portal" className={({ isActive }) => isActive ? "active-nav navcont" : "navcont"}> PORTAL</NavLink> */}
 
   

   </div>

 
   </div>
  )
}

export default Navbar
