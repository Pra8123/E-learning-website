import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="#about">About Us</a></li>
            <li><Link to="/Login">Login</Link></li>
            <li><a href="#al">Alumni Speak</a></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><a href="#test">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#java">Java Training</a></li>
            <li><a href="#design">Latest Designs</a></li>
            <li><a href="#product">Product Designs</a></li>
            <li><a href="#ml">ML and Data Science</a></li>
            <li><a href="#mern">MERN Stack</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#customer">Customer Agreement</a></li>
            <li><a href="#privcy">Privacy Policy</a></li>
            <li><a href="#gdpr">GDPR</a></li>
            <li><a href="#secu">Security</a></li>
            <li><a href="#testi">Testimonials</a></li>
            <li><a href="#med">Media Kit</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Address:</h4>
          <p>
            NALANDA 53/1 C, Manoj Arcade, 24th Main Rd, Sector 2, HSR Layout, Mumbai - 560102, <br />
            Mahrashtra, India.<br />
            Phone No: 1800-212-7688<br />
            © 2025 - Prathamesh. All Rights Reserved.<br />
            The certification names are the trademarks of their respective owners.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit" className="foot-btn">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
