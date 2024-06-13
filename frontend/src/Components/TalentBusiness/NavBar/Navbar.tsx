import React, { useState } from "react";
import "./Navbar.css";
import "../../../index.css";
import { FaInstagram, FaFacebookSquare, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);
  const handleNav = () => {
    setSlide(!slide);
    setNav(!nav);
  }; //set to the opposite with !
  const handleClose = () => {
    setNav(!nav);
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide ? "logo slide-right" : "logo"}>
          <h3>Beauty Booking</h3>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                About
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="/services">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                Contact
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="/about">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                Services
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                Gallery
              </Link>
            </a>
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
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffffff" }}></FaTimes>
          ) : (
            <FaBars size={20}></FaBars>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
