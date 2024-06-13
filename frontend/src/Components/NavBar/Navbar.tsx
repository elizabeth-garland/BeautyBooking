import React, { useState } from "react";
import "./Navbar.css";
import "../../index.css";
import { FaInstagram, FaFacebookSquare, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }; //set to the opposite with !

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h3>Beauty Booking</h3>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/services">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/about">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Gallery</a>
          </li>
          <div className="mobile-menu">
            <button>Login</button>
            <button>Sign up</button>
            <div className="social-icons">
              <FaInstagram className="icon" />
              <FaFacebookSquare className="icon" />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (<FaTimes size={20} style={{color: "#ffffffff"}}></FaTimes>) : (<FaBars size={20}></FaBars>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
