import React from "react";
import "./Navbar.css"
import { FaWhatsapp} from "react-icons/fa"

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>P</span>hy
            <span>S</span>ics
          </h2>
        </div>


        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          
        </div>


        <div className="social-media">
          <ul className="soccial-media-desktop">
            <li>
              <a 
              href="https://wa.me/919836180975"><FaWhatsapp className="whatsapp"/></a>
            </li>
          </ul>
        </div>
      </nav>




      {/* <section className="hero-section">
        <p>Welcome to</p>
        <h1>Physics Coaching</h1>
      </section> */}
    </>
  )
}


export default Navbar;