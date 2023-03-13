import React from 'react'
import "./Home.css"
import {GoCheck } from "react-icons/go";
import {MdMail, MdPadding} from "react-icons/md";
import {BsFillCalendarCheckFill,BsTranslate} from "react-icons/bs";
import {FaBookReader,FaPhoenixFramework,FaPencilRuler,FaFileImport,FaChartLine, FaFileSignature} from "react-icons/fa";
import CountUp from 'react-countup';
import {RiContactsBookFill} from "react-icons/ri";
const Home = () => {


  const logoData=[{
    img:BsTranslate,
    title:"TRANSLATION"
  },
  {
    img:FaPhoenixFramework,
    title:"LOGO DESIGN"
  },
  {
    img:FaPencilRuler,
    title:"WRITING"
  },
  {
    img:FaFileImport,
    title:""
  },
  {
    img:FaBookReader,
    title:""
  }
,
{
  img:FaChartLine,
  title:""
}]

  return (
    <div>
               <div className='home-bg'>
                  <h1>A PLACE WHERE IDEAS GROW.</h1>
                    <div className='homeline'></div>
                      <p>Welcome to TOTAL DIGITAL PRINTS.
                       <br/>
                              Digitally forward Creative. Connected Creativity.
                              We are intelligence in action
                       <br/>
                           Innovate. Inspire.</p>
                        <button className='btn'><FaBookReader/> APPLY FOR A JOB</button>
                         </div>
                <div className='about-us'>
                <div className='aboutimage'>
          <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/home-img2.jpg"/>
                </div>
                     <div className='aboutcontent'>
                     <h1>ABOUT US</h1>  
                   <div className='aboutusline'></div>

                    <p>We are creative event producers with over 20 years of experience 
                      <br/>in delivering award-winning events. The clients we have retained 
                      <br/>span numerous verticals, predominantly retail, pharmaceutical, <br/>
                       banking, sports and corporate hospitality sectors.</p>
                               <button>Read More</button>
                </div>
   
               </div>
 <div className='we-pro'>
  <div className='we-procontext'>
    <h1>We provide the solutions to grow your skill From Good to Great.</h1>
  <div className='we-proline'></div>
  <p className='ourtext'>If you’re just starting your first job, congratulations! This is an exciting time, and a wonderful first step in a long journey. Who knows where it will take you? However, it can also be a scary prospect, with lots of new things to learn. There’ll no doubt be many things you’ve never had to consider before that suddenly you’ll need to understand.</p>
  <button> <RiContactsBookFill/> CONTACT US</button>
  </div>
  <div className='ourpurpose'>
    <div className='purposeimage'>
       <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/service3.jpg"/>
    </div>
    <h2 className='ourtitle'>Our Purpose</h2>
    <p className='ourtext'>Our only purpose is to see our client reach their full potential and become the most accomplished author you can be.</p>
  </div>
  <div className='our-mission'>
    <div className='purposeimage'>
      <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/service2.jpg" />
   <h2 className='ourtitle'>Our Mission</h2>
   <p className='ourtext'>To accelerate the world’s transition to sustainable energy and to help companies build places where employees love to work.</p>
    </div>
  </div>
 </div>
 <div className='conslt'>
   <p>CREATIVE CONSULTING AGENCY FOR SMART SOLUTIONS.</p>
  <div className='consltline'></div>
  <button> <FaBookReader style={{fontSize:"15px"}}/> BECOME A WORKER </button>
 </div>
 <div className='ourService'>
  
  <div className='serviceline'>
  <h1>OUR SERVICES</h1>
  <div className='serviceunderLine'></div>
  </div>
  <div className='servicedisplay'>
  <div className='logoDiv'>
 <div className='logoBox'>
 <div className='logobg'><BsTranslate className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>TRANSLATION </h5>
 </div> 
  </div>
  <div className='logoDiv'>
  <div className='logoBox'>
 <div className='logobg'><FaChartLine className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>SEO OPTIMIZATION</h5>
 </div> 
  </div>
  <div className='logoDiv'>
  <div className='logoBox'>
 <div className='logobg'><FaPhoenixFramework className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>LOGO DESIGN</h5>
 </div> 
  </div>
  <div className='logoDiv'>
  <div className='logoBox'>
 <div className='logobg'><FaPencilRuler className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>WRITING</h5> 
 </div> 
  </div>
  <div className='logoDiv'>
  <div className='logoBox'>
 <div className='logobg'><FaFileImport className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>FILE CONVERSION</h5>
 </div> 
  </div>
  <div className='logoDiv'>
  <div className='logoBox'>
 <div className='logobg'><FaBookReader className='logoItem' fontSize={50} color={"#007BFF"}/></div>
      <h5>PROOF READING</h5>
 </div> 
  </div>
  <div>
    <img src=""/>
  </div>
  </div>

  <div className=''>

  </div>
 </div>
 <div className='counter'>
  <div className='allCount'>
    <div className='incount'>
   <h1><CountUp start={1} end={1270} duration={1} delay={0}/>+</h1>
    <h5>PROJECTS COMPLETED</h5>
    </div>
  </div>
  <div className='allCount'>
  <div className='incount'>
   <h1><CountUp start={1} end={220} duration={1} delay={0}/>+</h1>
    <h5>CLIENTS</h5>
    </div>
  </div>
  <div className='allCount'>
  <div className='incount'>
   <h1><CountUp start={1} end={760} duration={1} delay={0}/>+</h1>
    <h5>PROBLEMS SOLVED</h5>
    </div>
  </div>
  <div className='allCount'>
  <div className='incount'>
   <h1><CountUp start={1} end={10} duration={1} delay={0}/>+</h1>
    <h5>YEARS OF EXPERIANCE</h5>
    </div>
  </div>
 </div>
 <div className='overview'>
  
 <div className='overview-left'>
 <h1>Job Overview<br/>
We value your time</h1>
<div className='jobline'></div>

<p>We have jpg there are needed to be translated and converted into pdf file due to the project package selected make sure to carry out the project in time and to submit all Pdf files in a zip along side your project code.</p>
<p>To become our REMOTE EMPLOYEE you must having any of this skills:</p>

 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>TYPING</h5>
  </div>   

 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>LOGO DESIGN</h5>
  </div>   
 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5> DATA ENTRY</h5>
  </div>   
 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>EDITORIAL WRITING</h5>
  </div>   
 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>COPY TYPING</h5>
  </div>   

 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>RESEARCH WRITING</h5>
  </div>   

 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5> FILE CONVERSION JPG TO PDF</h5>
  </div>   

 <div className='overview-flex'>
  <div style={{background:"rgb(0,123,255)", color:"white"}}><GoCheck/></div>
  <h5>TRANSLATION FROM VARIOUS LANGUAGES</h5>
  </div>   

<div className='view-button'> 
  
  <div className='contactbtn' >  <MdMail style={{fontSize:"15px",marginLeft:"20px"}}/> <p style={{ marginRight:"20px"}} > CONTACT US</p> </div>
  <button className='applybtn'> <BsFillCalendarCheckFill/> APPLY FOR JOB OFFER</button>
</div>
</div>
  
 <div className='overview-right'>

</div>
 </div>
 <div className='people'>
 <h1>WHAT PEOPLE SAY</h1>
  <div className='serviceline'></div>

<div className='sub-people'> 
<div className='jack'>
    <p>It is such a great experience working with companies or individuals from all over the world. My payment came immediately i completed my Task.
 
</p>
<p> 
TOTAL DIGITAL PRINTS is a real life changer for me and lots of people..</p>
   <div className='jack-flex'> 
   <div className='jackimg'>
    <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/1240090_10209068662656627_3824179246372822556_n.jpg"/>
    
   </div>
   <h3>JACK ARMSTRONG</h3>
   </div>
    </div>
    <div className='jeff'>
    <p> 
    I was frustrated to prove myself, and want to get exposure of my creativity, i found TOTAL DIGITAL PRINTS and here i got an opportunity to show my skill to the world. I was rewarded and motivated to work hard. Now I feel comfort to take challenge and improve my daily life. Thank you.
   </p>
  
    <div className='jack-flex'> 
    <div className='jackimg'>
     <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/Bhanupriya.jpg"/>
     
    </div>
    <h3>JEFF KLAUS</h3>
    </div>
    </div>
    <div className='jack'>
    <p> 
    TOTAL DIGITAL PRINTS changed my lifestyle completely. Now i am much more confidant and feel proud to be a freelancer. Special thanks to SPARVIX jobs team that they are doing hard work. They also contribute their stuff to sort out unemployed problem of the world.
   </p>
  
    <div className='jack-flex'> 
    <div className='jackimg'>
     <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/Grete.jpg"/>
     
    </div>
    <h3>SUSANNE ARNOLD</h3>
    </div>
    </div>
</div>
  
 </div>

    </div>
  )
}

export default Home
