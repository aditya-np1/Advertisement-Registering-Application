import React from "react";
import "./footer.css";
import { FcAdvertising } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer">
      <div className="secContainer container grid">
        <div className="mainContent grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className="logo flex">
                <h1 className="flex">
                  <FcAdvertising className="icon" />
                  AdBoard
                </h1>
              </a>
            </div>
            <div className="socials flex">
              <FaFacebook className="icon" />
              <FaLinkedin className="icon" />
              <FaSquareXTwitter className="icon" />
            </div>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Helpfull Links</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Know More About AdBoard</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <span>
              <h4> Contact Us</h4>
              <span className="phone"> +91 9726339599</span>
              <span className="email">akshargrow.info@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
