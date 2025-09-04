import React from "react";
import "./RestHome.css";

const Contact = () => {
  return (
    <div className="main-content">
      <div className="home-heading">
        <h2 >Our Solutions</h2>
        {/* <p>
        Delivering cutting-edge enterprise software, web, mobile, and digital
        solutions worldwide with unmatched quality at competitive rates.
      </p> */}
      </div>
      <div className="solution-section">
        <div className="solution-left">
          <h3>Development</h3>
          <p>
            We deliver cutting-edge enterprise solutions that help businesses scale globally, driving more efficiency, enquiries, sales, and profits. Over the years, we’ve engineered innovative systems and provided trusted support that empower success-driven organizations.
          </p>
          <p>
            Our team of skilled developers and consultants design and implement solutions tailored to your business needs—covering ERP, web applications, mobility, cloud, and digital platforms. Here are some of our result-oriented enterprise solutions:
          </p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                E-commerce Website
              </li>
              <li>
                <span className="icon1">✔</span>
                CRM
              </li>
              <li>
                <span className="icon1">✔</span>
                CMS
              </li>
              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_11.png" alt="Development Services" />
        </div>
      </div>

      <div className="solution-section1">
        <div className="solution-left">
          <h3>E-Commerce Development</h3>
          <p>
            We empower businesses to run seamless wholesale and retail operations with our headless E-Commerce platforms. We help you strengthen your brand presence online, engage communities of loyal customers, and leverage advanced digital targeting technologies for sustainable growth.

          </p>
          <p>
            Whether you’re a startup, SME, or global enterprise, our fully managed online store solutions are designed to scale with your business. With fast, flexible, and secure web and mobile E-Commerce development, we ensure you stay ahead in today’s competitive digital marketplace.
          </p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                E-commerce development
              </li>
              <li>
                <span className="icon1">✔</span>
                Digital Marketplace
              </li>
              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_12.png" alt="Development Services" />
        </div>
      </div>


      <div className="solution-section">
        <div className="solution-left">
          <h3>Web Design</h3>
          <p>
            We craft future-ready websites that blend creativity with functionality. Through continuous collaboration and strategic discovery, we design digital experiences that not only meet business goals but also delight users at every interaction.


          </p>
          <p>
            From responsive website design to intuitive UI/UX development, our solutions are tailored to ensure seamless navigation, strong brand presence, and lasting customer engagement across global markets.
          </p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                Website Design
              </li>
              <li>
                <span className="icon1">✔</span>
                UI & UX
              </li>
              <li>
                <span className="icon1">✔</span>
                Digital Experiences
              </li>
              <li>
                <span className="icon1">✔</span>
                Mobile-First Design
              </li>
              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_13.png" alt="Development Services" />
        </div>
      </div>

      <div className="solution-section1">
        <div className="solution-left">
          <h3>Enterprise Software</h3>
          <p>
            At Global Enterprise Solutions, we deliver customized enterprise software designed to overcome today’s challenges and prepare businesses for tomorrow’s opportunities. Our solutions focus on scalability, automation, and digital transformation, empowering organizations to achieve sustainable growth.
          </p>
          <p>

            We engineer business-specific ERP systems, mobility solutions, cloud integrations, and DevOps practices that seamlessly align with your operations. From simplifying daily workflows to solving complex business problems
          </p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                ERP Software Development
              </li>
              <li>
                <span className="icon1">✔</span>
                Business Process Automation
              </li>
              <li>
                <span className="icon1">✔</span>
                Enterprise Mobility Solutions
              </li>
              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_14.png" alt="Development Services" />
        </div>
      </div>

      <div className="solution-section">
        <div className="solution-left">
          <h3>Mobile


          </h3>
          <p>
            At Global Enterprise Solutions, we craft powerful and engaging iOS, Android, and cross-platform applications tailored for startups, mid-sized businesses, and global enterprises. Our approach blends innovation, strategy, and user experience, helping transform your ideas into scalable mobile solutions.
          </p>
          <p>
            We specialize in delivering seamless, intuitive, and secure mobile experiences that empower businesses to connect with customers, enhance productivity, and stay ahead in the digital era.</p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                Android App Development
              </li>
              <li>
                <span className="icon1">✔</span>
                iOS Application Development
              </li>
              <li>
                <span className="icon1">✔</span>
                Hybrid App Development
              </li>

              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_15.png" alt="Development Services" />
        </div>
      </div>

      <div className="solution-section1">
        <div className="solution-left">
          <h3>Server & Desktop Support</h3>
          <p>
            We deliver enterprise-grade IT infrastructure support that keeps your business running seamlessly. From proactive server monitoring and system maintenance to desktop troubleshooting and upgrades, we ensure maximum uptime, security, and reliability
          </p>
          <p>

            Our expert support team empowers your workforce with smooth operations, reducing disruptions and optimizing performance across your entire IT ecosystem. Here are some of our tailored support solutions:</p>

          <div className="solution-list">
            <ul>
              <li>
                <span className="icon1">✔</span>
                24/7 Server & Network Monitoring
              </li>
              <li>
                <span className="icon1">✔</span>
                Desktop Troubleshooting
              </li>
              <li>
                <span className="icon1">✔</span>
                Upgrade & Security Management

              </li>
              {/* repeat for other list items */}
            </ul>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="Image_16.png" alt="Development Services" />
        </div>
      </div>




    </div>


  );
};

export default Contact;
