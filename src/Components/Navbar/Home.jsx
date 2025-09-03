import React from "react";
import "./Home.css";
import About from "./About";
import Contact from "./RestHome"
import OurPartners from "./OurPartners";
import RestHome from "./RestHome"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_page">
      <div className="hero-section">
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

      </div>
      <RestHome />

      <About />
      <OurPartners />





    </div>
  );
}
