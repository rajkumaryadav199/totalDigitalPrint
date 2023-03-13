import React from 'react'
import "./About.css"
import { BsPatchCheckFill } from "react-icons/bs";
const About = () => {
  return (
    <div>
      <div className='about-bg'>
        <h1>
          About</h1>
        <div id='aboutblue'></div>
      </div>
      <div>
        <h2 className='about-create'>CREATING A BUSINESS WITH AUTHENTIC INTEGRITY</h2>
        <div>
          <img src="https://totaldigitalprints.com/wp-content/uploads/2022/09/relate.jpg" />
        </div>
      </div>
      <div className='who-are'>
        <div className='who-are-left'>
          <h1>Who We Are</h1>
          <p>We are creative event producers with over 20 years of experience in delivering award-winning events. The clients we have retained span numerous verticals, predominantly retail, pharmaceutical, banking, sports, and corporate hospitality sectors.</p>

          <p>Our passion for innovative, on-trend production and design coupled with years of experience within the events industry has led to create Ireland’s first 360 Event Production company.</p>

          <p>We oversee all aspects of the event life cycle from concept generation to design and execution. This includes the building of temporary structures, stage sets, prop fabrication, lighting design, Audio Visual and onsite management.</p>
          <p>During our career, we’ve created, retained and established long-lasting relationships with all our clients and have delivered shows indoor and outdoor for up to 6,000 attendees.
            Verve The Live Agency, 4 years 2 months, Business Director Jun 2015 – May 2017 2 years.
            <br />Dublin
            <br />
            Verve is a leading European live communications agency. Our progression to the position of Business Director includes:</p>

          <div className='who-manage'>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />

            <p>Manage the day-to-day execution of brand campaigns including effective project management and budgeting across multiple projects, brands and territories. Facilitating collaboration between multiple stakeholders and agencies.</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>Partner with brand teams to develop annual brand and sponsorship activation plans to achieve their business goals.</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>We ensure project…</p>

          </div>
          <p>Account Director
            <br /> Apr 2013 – May 2017 4 years 2 months
            <br /> Dublin
            <br />  Our position as a leading marketing and communications professional entails creating successful brand and consumer sponsorship strategies and activations.</p>


          <div className='who-manage'>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />

            <p>Client account handling and relationship development as well as acquiring new clients and continuously scoping for business opportunities</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>Synchronize teams, drive attendance, event awareness, and productive post event analysis.</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>
              Manage all aspects of events: logistics, space, design, signage, staff, collateral…</p>

          </div>

          <p>Groove yard
          <br/> Event Director May 2008 – Mar 2013 (4 years 11 months)
          <br/> Galway
          <br/> Event Director for Groove yard with responsibility for the management of all projects including unique high profile events, exhibitions, stadium entertainment and major live concerts.</p>
          <div className='who-manage'>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />

            <p>Delivering events on time, within budget that exceed client’s expectations.</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>Ensure production quality of all agency events</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p> Maintaining timelines and priorities on every project</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p> Managing substantial budgets & priorities</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>Attracting, developing and retaining the best staff</p>
            <BsPatchCheckFill style={{ color: "rgb(0,123,255)", fontSize: "20px", width: "5%" }} />
            <p>Crowd Code of Ethics</p>

          </div>
      
        </div>

        <div className='who-are-right'>
          <h3>Fair Pay</h3>
          <p>Our goal is to pay our Crowd above minimum wage in every market around the world where we operate.</p>
          <h3>Inclusion</h3>
          <p>A diverse, inclusive culture is vital to our mission of helping build better. We offer opportunities for individuals of all abilities and backgrounds.</p>
          <p>Part-Time And full-Time Flexible Jobs</p>
          <p>Work that can be done from anywhere in the world</p>

          <h3>Projects</h3>
          <p>Qualify for longer-term or part-time opportunities</p>

          <h3>CURRENTLY HIRING</h3>
          <p>We are currently recruiting remote workers for available and on going project due to the Previous section A4 board meeting that lead the upgrade under Unit 9 & 10 Phitsborough, Phitsborough Dublin, Co. Dublin D07 A8NA, IE.</p>
          <p>We are currently hiring translators from the various countries :</p>

          {/* //////fech country/////// */}

          <p>Our vision is to aim and to realize the tremendous potentials of every creative author and to help the society by giving recruit chances to remote employees due to lack of work in some of the various countries and to also satisfy our customers 100%.</p>

        </div>
      </div>
    </div>
  )
}

export default About
