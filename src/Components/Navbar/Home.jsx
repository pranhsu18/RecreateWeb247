import React from "react";
import "./Home.css";
import About from "./About";
import OurPartners from "./OurPartners";


export default function Home() {
  return (
    <div className="home_page">
      <div className="hero-section">
  {/* Left Text */}
  <div className="hero-text">
    <p>
      We provide
      <h1 className="hero-heading1">
        ERP Solutions <br />
        Mobile App <br />
        CRM Systems <br />
        Web Design <br />
        Multi Media Solutions
      </h1>
      <br />
      to accelerate business growth.
    </p>

    {/* Contact Us Button */}
    <div className="contact-button">
      <a href="/contact" className="contact-btn">
        Contact Us
      </a>
    </div>
  </div>

  {/* Right Video */}
  <div className="hero-video">
    <video
      src="/Global_Enterprise_Solutions.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</div>








      <div className="HeadingPartOfHome">
        <h2 className="headings" >Our Solutions</h2>
      </div>

      <div className="solutionsection">

        <div className="frontdiv">
          <div className="imagesection">
            <img src="Image_1.png" alt="erp solutions" />
          </div>

          <div className="headingtextSection">
            <h2 className="animated-heading">ERP Implementation & Support</h2>
            <p>
              We deliver end-to-end ERP solutions that streamline processes, integrate workflows, and enhance decision-making. From setup to ongoing support, our scalable ERP expertise ensures efficiency, reduced downtime, and productivity tailored to your industry needs.</p>
          </div>
        </div>

        <div className="frontdiv1">
          <div className="imagesection">
            <img src="Image_2.png" alt="erp solutions" />
          </div>

          <div className="headingtextSection">
            <h2 className="animated-heading">Digital & Multimedia Solutions</h2>
            <p>
              We create engaging multimedia and digital content for businesses and media companies, from print-ready designs to interactive experiences. Our services—image processing, video editing, and content development—elevate brand presence with creativity, consistency, and audience impact.
            </p>
          </div>
        </div>

        <div className="frontdiv">
          <div className="imagesection">
            <img src="Image_3.png" alt="erp solutions" />
          </div>

          <div className="headingtextSection">
            <h2 className="animated-heading">Software Development & Project Management</h2>
            <p>
              We design, develop, and manage customized software solutions using proven frameworks. From new builds to scaling existing systems, we deliver on time, within budget, and with quality—ensuring seamless functionality that drives business growth.
            </p>
          </div>
        </div>

        <div className="frontdiv1">
          <div className="imagesection">
            <img src="Image_4.png" alt="erp solutions" />
          </div>

          <div className="headingtextSection">
            <h2 className="animated-heading">Web Design & Hosting</h2>
            <p>
              We craft stunning, user-friendly websites with secure, reliable hosting. From sleek designs to seamless navigation, our mobile-responsive, high-performance solutions ensure fast, secure, and always-online digital experiences that connect with and impress your audience.
            </p>
          </div>
        </div>

        <div className="frontdiv">
          <div className="imagesection">
            <img src="Image_5.png" alt="erp solutions" />
          </div>
          <div className="headingtextSection">
            <h2 className="animated-heading">Server & Desktop Support</h2>
            <p>
              We provide comprehensive IT infrastructure support, from server monitoring and desktop troubleshooting to maintenance and upgrades. With proactive solutions and expert assistance, we minimize downtime, maximize reliability, and keep your team working confidently without interruptions.
            </p>
          </div>
        </div>
        <div className="frontdiv1">
          <div className="imagesection">
            <img src="Image_6.png" alt="erp solutions" />
          </div>
          <div className="headingtextSection">
            <h2 className="animated-heading">Teleservices & Customer Support</h2>
            <p>
              We deliver end-to-end outsourcing solutions that boost customer satisfaction and efficiency. From teleservices to full support management, our trained professionals and advanced systems ensure timely, personalized care—helping you provide world-class experiences while focusing on core priorities.
            </p>
          </div>
        </div>


      </div>
      <About />
      <OurPartners />





    </div>
  );
}
