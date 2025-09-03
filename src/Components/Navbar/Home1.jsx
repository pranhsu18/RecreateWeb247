import React from "react";
import "./Home1.css";

import RestHome from "./RestHome"
import About from "./About";
import OurPartners from "./OurPartners";
const Home1 = () => {
  return (
    
      <section className="hero">
      <div className="hero-container">
        
        {/* Left Section */}
        <div className="hero-left">
          <h2 className="hero-heading">
            Empowering
            <div className="highlight"> Enterprise </div>
            <div className="yellow">with Smart  </div>
            <div className="last">Global Solutions </div>
          </h2>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="carousel">
            <div className="carousel-track">
                

              <div className="service-card">
                <img src="enterprise.png" alt="Cloud" />
                <p>Enterprise Solutions</p>
              </div>
              <div className="service-card">
                <img src="Web_dev.png" alt="Security" />
                <p>Web Development</p>
              </div>
              <div className="service-card">
                <img src="Mobile_App.png" alt="Mobile" />
                <p>Mobile Apps</p>
              </div>
              <div className="service-card">
                <img src="Customer_Support.png" alt="AI" />
                <p>Customer Support</p>
              </div>
              <div className="service-card">
                <img src="Digital_Sol.png" alt="Web" />
                <p>Digital Solutions</p>
              </div>
              <div className="service-card">
                <img src="enterprise.png" alt="Cloud" />
                <p>Enterprise Solutions</p>
              </div>
              <div className="service-card">
                <img src="Web_dev.png" alt="Security" />
                <p>Web Development</p>
              </div>
              <div className="service-card">
                <img src="Mobile_App.png" alt="Mobile" />
                <p>Mobile Apps</p>
              </div>
              <div className="service-card">
                <img src="Customer_Support.png" alt="AI" />
                <p>Customer Support</p>
              </div>
              <div className="service-card">
                <img src="Digital_Sol.png" alt="Web" />
                <p>Digital Solutions</p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
    
    
  );
};

export default Home1;
