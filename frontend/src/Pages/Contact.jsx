import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
     <div className='cont-bg'>
     <h1>Contact</h1>
     <div className='lineblue'></div>
       </div>
      
     <div className='contactus'> 
       <h1>CONTACT US</h1>
       <div className='contactblue'></div>
      <form className='contactform'>
        <div className='contactname'> 
        <input type="text" placeholder="Name" className='contactemail' />
        <input type="text" placeholder="Email"  className='contactemail' />
        </div>
        <input type="text" placeholder="Subject" className='subject' />
         <textarea   type="text" placeholder="Message" className='message'/>
         <input type="submit" value="Send Message" className='submit' />
      </form>
      <i class="fas fa-map-marker-alt pagelayer-icon-circle pagelayer-animation-{{anim_hover}}" aria-hidden="true"></i>
      </div>
      

    </div>
  )
}

export default Contact
