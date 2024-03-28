import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Define:</p>
              <p>
                I can take your visual product requirements and create a clear
                technical plan of action that our engineers can use to build
                your product.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front End:</p>
              <p>
                I use the latest emerging technology such as React Native,
                AR-Core, JavaScript, ReactJS, Swift and Flutter to code your
                product’s front-end infrastructure.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back End:</p>
              <p>
                I have skilled back-end engineers that can connect your product
                to API protocols and scalable instances so you can deploy your
                product worldwide.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Support:</p>
              <p>
                I support existing projects and create monthly reports for your
                software to ensure you’re up to date with the latest technology
                available.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>System Analyst</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and Developing Systems:</p>
              <p>
                I can design and develop information systems that meet those
                needs. This includes creating detailed system specifications,
                designing user interfaces, and working with developers to
                implement the systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and Debugging:</p>
              <p>
                I am responsible for testing the systems they have developed to
                ensure they work correctly and meet the requirements. They also
                identify and fix any issues that arise during testing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing User Support:</p>
              <p>
                I can provide user support and training for the systems they
                have developed. They assist users with any problems they
                encounter and provide guidance on how to use the system
                effectively..
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintaining Systems:</p>
              <p>
                I am responsible for maintaining and updating the systems they
                have developed. This includes monitoring performance,
                identifying and fixing issues, and implementing updates and
                upgrades as necessary.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF SYSTEM ANALYST */}
      </div>
    </section>
  );
};

export default Services;
