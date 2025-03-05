import React, { useState } from "react";
import logo from '../../assets/edu_logo.png';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">

          <Link to="/"> <img src={logo} width="70px" height="90px" alt="logo" /></Link>
        </div>
        <button className="hamburger" onClick={toggleNav}>
          &#9776;
        </button>
        <div className={`tex ${isNavVisible ? "show" : ""}`}>
          <ul>
            {/* <li><a href="/about">About</a></li>
            <li><a href="/Courses">Courses</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/location">Location</a></li> */}

            <li><Link to="/">Home</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <NavDropdown id="nav-dropdown-dark-example" title="Resources" >
              <NavDropdown.Item><Link to="/Book" className="dropdown-link">E-Book</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/Webinar" className="dropdown-link">Webinar</Link></NavDropdown.Item>

            </NavDropdown>
            <li><Link to="/Quiz">Quiz</Link></li>
            <li><Link to="/Pricing">Pricing</Link></li>


            <li style={{ fontSize: "20px" }}>
              <i className="fa-solid fa-cart-plus"></i>
            </li>
            <li>
             
              <Link to="/Login"><button className="btn-login">Login</button></Link>
            </li>
            <li>
              
              <Link to="/Signup"><button className="btn-login">Sign up</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
