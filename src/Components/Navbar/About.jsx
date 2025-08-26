import React from 'react'
import "./About.css"

export default function About() {
  return (
    <>
      <div className="HeadingPartOfHome">
        <h2 className="headings">About Us</h2>
      </div>

      <div className="wrapper">
        <div className="aboutus-text">
          <p>We provide innovative enterprise solutions, ERP implementations, and engaging multimedia content that empower businesses worldwide. With expertise in software, digital design, and customer support, we deliver scalable, creative, and efficient services that enhance productivity, streamline operations, and strengthen brand presence.</p>
        </div>
        {/* Mission Card */}
        <div className="card-info">
          <div className="fronttext">
            <div className="frontheading">
              <div className="icon">🎯</div>
              <h2 className="animated-heading-about">Our Mission</h2>
            </div>
          </div>
          <div className="backtext">
            <div className="abouttext">
              <p>
                Our mission is to deliver cutting-edge ERP and digital media
                solutions that empower businesses worldwide. We aim to streamline
                operations, boost efficiency, and support sustainable growth for
                enterprises of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card-info">
          <div className="fronttext">
            <div className="frontheading">
              <div className="icon">👁️</div>
              <h2 className="animated-heading-about">Our Vision</h2>
            </div>
          </div>
          <div className="backtext">
            <div className="abouttext">
              <p>
                Our vision is to become a global leader in ERP and media
                services, driving digital transformation with innovation,
                reliability, and customer-centric solutions for the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Team Section Added */}
      <div className="HeadingPartOfHome">
        <h2 className="headings">Meet Our Team</h2>
      </div>

      <section className="team">
        <div className="team-card">
          <img src="https://gns.tv/files/eric.jpg" alt="Eric Erickson" />
          <h3>Eric Erickson</h3>
          <h4>Founder & CEO</h4>
          <p>
            Eric Erickson has worked in technology and finance since 1989. Engagements include consulting for Motorola, Intel, Chase Manhattan Bank, Gillette, and others. He has a B.S. in Finance and an M.B.A. in Finance and is an Oracle Certified DBA.
          </p>
        </div>

        <div className="team-card">
          <img src="https://gns.tv/files/smith.jpg" alt="Chris Smith" />
          <h3>Chris Smith</h3>
          <h4>Chief Editor</h4>
          <p>
            Chris Smith is a publishing consultant, editor, and author. He holds a B.A. in English from UC Berkeley and an M.A. in Journalism from the University of Colorado. He has published 300+ technical articles and multiple books.
          </p>
        </div>

        <div className="team-card">
          <img src="https://gns.tv/files/steve.jpg" alt="Steve Staloch" />
          <h3>Steve Staloch</h3>
          <h4>Chief Advisor</h4>
          <p>
            Steve Staloch has over 40 years in journalism and newspaper management, with experience in M&A and working with private equity. He holds a B.S. in Journalism from Thief River Falls College.
          </p>
        </div>
      </section>
    </>
  )
}
