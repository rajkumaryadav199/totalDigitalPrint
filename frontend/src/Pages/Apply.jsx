import React, { useEffect, useState } from 'react'
import "./Apply.css"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const Apply = () => {
  const [value, setValue] = useState();
  const [country, setCountry]= useState([]);
  

  useEffect( ()=>{
   const getcountry= async ()=>{
     const req= await fetch("https://restcountries.com/v3.1/all");
     const getres= await req.json();
     console.log(getres);
     setCountry(await getres);

   }
   getcountry();
  },[]);
  const handlecountry=(event)=>{
    const getcoutryid= event.target.value;
    // setCountryid(getcoutryid);
    event.preventDefault();
  }
  return (
    <div>
   <div className='apply-bg'>
      <h1>Apply</h1>
      <div className='applyline'></div>
   </div>
   <div className='apply-job'>
    <h1>JOB OVERVIEW</h1>
    <p>We have jpg that are needed to be translated and converted into pdf file, due to the project package selected make sure to carry out the project in time and to submit all Pdf files in a zip along side your project code.</p>
 
     <h4>Terms and Conditions</h4>
     <p>* The project must be completed within the time frame given by the company</p>
     <p>* If any additional or duplicate files are found in the zip file, the work will be rejected.</p>
     <p>* Incomplete files or incomplete project will not be acceptable.</p>
     <p>* Type manually; the use of any third-party software is strongly prohibited.</p>
     <p>* Make a separate document file for each image and the name of each document file should match the name of the corresponding image file.</p>
     <p>Font style, size and color may be different in each image, but you need to write each file in the same way.</p>
   
     <h4>To become our REMOTE EMPLOYEE you must have any of this skills:</h4>
    <p>* TYPING</p>
    <p>* TRANSLATION FROM VARIOUS LANGUAGES</p>
    <p>* LOGO DESIGN</p>
    <p>* DATA ENTRY</p>
    <p>* COPY TYPING</p>
    <p>*WRITING</p>
    <p>* EDITORIAL WRITING</p>
    <p>* RESEARCH WRITING</p>
    <p>* FILE CONVERSION JPG TO PDF.</p>
 
    <h4>Our Culture</h4>
    <p>A values-centric culture is vital to our mission to help build better by creating large volumes of high-quality training data faster.</p>
  
    <h4>Performance</h4>
    <p>Performance is having the focus and agility to achieve quality outcomes and exceed expectations. You never stop learning, and challenge yourself every day, while maintaining a healthy perspective and balance.</p>
  
    <h4>Honesty</h4>
    <p>Honesty is being a truth-teller in a respectful way, taking accountability for your actions, and communicating with integrity with each other, our customers, our crowd and ourselves.</p>
  

    <h4>Humility</h4>
    <p>Humility is being part of a team, giving credit and showing gratitude to others for their contributions, seeking diverse perspectives, and, not being afraid to ask for help when you don’t know something.</p>
 
   <h4>Grit</h4>
   <p>Grit is about taking ownership, not giving up, finding creative solutions, and, having the courage to succeed. Grit and resilience give you the confidence and determination to achieve your goals.</p>
 
   <h1>Application Packages</h1>

   <div className='packages'>
    <div >
      <h3>MINI PACKAGE</h3>
      <p>25 images</p>
      <p>Salary $ 700</p>
      <p>3 days deadline</p>
    </div>
    <div>
    <h3>ADVANCE PACKAGE</h3> 
     <p>65 images</p>
    <p>Salary $2,300</p>
    <p>5 days deadline</p>
    </div>
    <div>
      <h3>AMATEUR PACKAGE</h3>
      <p>50 images</p>
       <p>Salary $1,500</p> 
      <p>3 days deadline</p>
   
    </div>

    <div>
     <h3>PRO PACKAGE</h3>
      <p>100 images</p>
      <p>Salary $3,500</p>
      <p>5 days deadline</p>
    </div>
   </div>
   </div>

   {/* /////form////// */}
   <div className='application'>
      <h1>Application Form</h1>
      <div className='blue'></div>
     <div className='form'>
      <form> 
      <h3>Name</h3>
      <div className='name'>
       <input type="text" />
       <label>First</label>
       <input type="text"/>
       <label>Last</label>
   
      </div>
      <h3>Email</h3>
      <input type="text" className='email'/>
      <h3>Phone</h3>
      <PhoneInput
     
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
       <h3>Gender</h3>
       <select className='email'>
        <option  value="MALE">MALE</option>
        <option  value="FEMALE">FEMALE</option>
       </select>

       <h3>Age</h3>
      <input type="text" className='age'/>
      <h3>Address</h3>
      <input type="text" className='email'/>
      <label>Address Line 1</label>

      <div className='name'>
       <input type="text" />
       <label>City</label>
       <input type="text"/>
       <label>State/Province/Region</label>
      </div>

      <div className='name'>
       <input type="text" />
       <label>Postal Code</label>
       <select name="country" className="formselect" onChange={(e)=>handlecountry(e)}>
                   <option>--Select Country--</option>
                   {
                     country.map( (getcon)=>(
                   <option className="apply-country" key={getcon.name} value={getcon.name.common}> {getcon.name.common}</option>
                     ))
                }
                 </select>
       <label>Country</label>
       </div>
       <h3>Application Package</h3>
       <select className='email'>
        <option  value="Mini Package">Mini Package</option>
        <option  value="Amature Package">Amature Package</option>
        <option  value="Advance Package" > Advance Package</option>
        <option  value="Pro Package" >Pro Package</option>
       </select>

       <h3>Recruiter Name</h3>
      <input type="text" className='email'/>
      <h3>Have you ever worked remotely? </h3>
      <div className='work'>
        <div className='subwork'> 
        <input  type="checkbox"  className='remote'/> 
        <label >Yes</label>
        </div>
        <div className='subwork'> 
        <input  type="checkbox"  className='remote'/>
        <label >No</label> 
        </div>
      </div>

      <h3>How long do you want to work for us? </h3>
      <div className='work'>
        <div className='subwork'> 
        <input  type="checkbox"  className='remote'/> 
        <label >MONTHS</label>
        </div>
        <div className='subwork'> 
        <input  type="checkbox"  className='remote'/>
        <label >YEARS</label> 
        </div>
      </div>
      <h3>Why do you want to be a TOTAL DIGITAL PRINTS Employee?</h3>
      <textarea row="4" col="50"   className='descript'></textarea> 
      <input  className="applysubmit" type="submit" value="Submit" />
      </form>
    </div>
    </div>


    </div>
  )
}

export default Apply
