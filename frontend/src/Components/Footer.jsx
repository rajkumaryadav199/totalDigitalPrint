import React from 'react'
import "./Footer.css"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {ImLocation2} from "react-icons/im"
import {MdCall, MdEmail} from "react-icons/md"

const Footer = () => {
  return (

    <div className='fo-Cont'>
   <div className='foA'>
   
   <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/logo.png" />
  <div className='foText' >
  If you’re just starting your first job, congratulations! This is an exciting time, and a wonderful first step in a long journey.
  </div>

  <div  className='foLogo'
   >
  <a className='foIcon' href='https://www.facebook.com/#'>
  <BsFacebook color='Blue' fontSize="30px" />
  </a>
  <a className='foIcon1'  href='https://www.instagram.com/#'>
  <AiFillInstagram color='rgb(29,161,242)' fontSize="30px"/>
  </a>
  


   </div>

    </div>
  
    <div className='foB'>
    <h3 style={{color:"blue"}}>
        Quick Link
    </h3>
    <h4>Home</h4>
    <h4>About Us</h4>
    <h4>Contact Us </h4>
    <h4>Service</h4>

  </div>
  
  <div className='foC'>
  <h3 className='' style={{color:"blue", marginLeft:"40px"}}>
        Get in Touch
    </h3>
   <div style={{marginLeft:"40px"}} > <ImLocation2 color="blue" />   <span style={{marginLeft:"30px"}}>425 Pike street, Seattle, WA, USA</span></div>
   <div style={{marginLeft:"40px"}}> <MdCall color="blue"/>   <span style={{marginLeft:"30px"}}>+1234567890</span></div>
   <div style={{marginLeft:"40px"}}> <MdEmail color="blue"/>   <span style={{marginLeft:"30px"}}>job@totaldigitalprints.com</span></div>
   
   
  </div>
     </div>
  )
}

export default Footer
