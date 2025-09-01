import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <img
            src="https://247erp.net/files/ges_logo.jpg"
            alt="Global Enterprise Solutions"
            className="footer-logo"
          />
          <p className="company_description">
            We deliver innovative ERP and media solutions in today’s competitive digital era.
          </p>
          <br />
          <p>United States: 112 Bowery, New York, NY 10013</p>
          <p className="footer-contact">
            <FaPhoneAlt /> +1 (646) 389-6722
          </p>
          <p className="footer-contact">
            <FaEnvelope /> info@247erp.net
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/business">Business</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Add social links later */}
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} <b><a href="https://gns.tv/">Global Enterprise Solutions</a></b>. All Rights Reserved.  
        <br /> Designed by Global Enterprise Solutions
        <br />
        <small className="ai-credit">Some visuals enhanced with AI assistance</small>
      </div>
    </footer>
  );
}
