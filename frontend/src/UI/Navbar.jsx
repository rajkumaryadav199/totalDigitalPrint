import React from 'react'
import { NavLink } from 'react-router-dom'
//import { Container } from '@material-ui/core';

import "./Navbar.css"
const Navbar = () => {
  return (
   <div className='nav-cont'>
   <div className='nav-logo'>
    <img src='https://totaldigitalprints.com/wp-content/uploads/2022/09/logo.png' alt='logo' />
   </div>
  <div className='nav-ele'>
   <NavLink  to="/">
    Home
   </NavLink>

   <NavLink  to="/About">About</NavLink>
   <NavLink  to="/Tax">Tax</NavLink>
   <NavLink  to="/Contact">Contact</NavLink>

   
   <NavLink  to="/Apply">Apply</NavLink>
   <NavLink  to="/Portal"> Portal</NavLink>
 
   

   </div>

 
   </div>
  )
}

export default Navbar
