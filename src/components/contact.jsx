import React from "react";
import Showpg from "./showpg";
import "../style/contact.css";
const contact = () => {
  return (
    <>
      <div className="id-card-contact">
        <div className="id-card">
          <img src="./Images/mineimg.jpeg" alt="" />
          <h2>Masud Alam Molla</h2>
          <p>
            <span className="college">College:</span>
            Government College of Engineering and Ceramic Technology
          </p>
          <h3>Contact</h3>
          <div className="linkedin-logo">
            <a
              href="https://www.linkedin.com/in/masud-alam-molla-b53565248/"
              target="_blank">
              <img src="./Images/linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <div className="id-card">
          <img src="./Images/arka.jpeg" alt="" />
          <h2>Arkabrata Chandra</h2>
          <p>
            <span className="college">College:</span>
            Government College of Engineering and Ceramic Technology
          </p>
          <h3>Contact</h3>
          <div className="linkedin-logo">
            <a
              href="https://www.linkedin.com/in/arkabrata-chandra-a26a61257/"
              target="_blank">
              <img src="./Images/linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <div className="id-card">
          <img src="./Images/subarna.jpeg" alt="" />
          <h2>Subarna Manna</h2>
          <p>
            <span className="college">College:</span>
            Government College of Engineering and Ceramic Technology
          </p>
          <h3>Contact</h3>
          <div className="linkedin-logo">
            <a
              href="https://www.linkedin.com/in/subarna-manna/"
              target="_blank">
              <img src="./Images/linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <div className="id-card">
          <img src="./Images/suprio1.jpg" alt="" />
          <h2>Suprio Nath</h2>
          <p>
            <span className="college">College:</span>
            Government College of Engineering and Ceramic Technology
          </p>
          <h3>Contact</h3>
          <div className="linkedin-logo">
            <a
              href="https://www.linkedin.com/in/suprio-nath-98233521b/"
              target="_blank">
              <img src="./Images/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
