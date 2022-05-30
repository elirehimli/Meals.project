import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
          <div className="all-footer">
            <div className="footer-about">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                    eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in
                    eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in
                    cididunt .
                </p>
                <FaFacebookF className="footer-social" />
                <FaLinkedinIn className="footer-social" />
                <AiOutlineInstagram className="footer-social" />
                <AiOutlineTwitter className="footer-social" />
            </div>
            <div className="footer-menu">
                <h2>The Menu</h2>
                <ul>
                    <li><a href="#">Speacial Items</a></li>
                    <li><a href="#">Fresh Breakfast</a></li>
                    <li><a href="#">Lunch Menu</a></li>
                    <li><a href="#">Dinner Items</a></li>
                    <li><a href="#">We Offerd Food</a></li>
                </ul>
            </div>
            <div className="footer-touch">
                <h2>Get in Touch</h2>
                <div className="footer-display">
                    <div className="footer-left">
                        <div>
                            <BsClockHistory className="footer-icon" />
                        </div>
                        <div className="footer-icon-pad" >
                            <MdOutlineLocationOn className="footer-icon" />
                        </div>
                    </div>
                    <div className="footer-touch-content">
                        <h3>Monday- Friday</h3>
                        <h4>08am - 12pm</h4>
                        <h3>Saturday - Sunday:</h3>
                        <h4>10am - 11pm</h4>
                        <h3>8121 Sierra Lane Tampa, Florida 33604</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-end">
            <h3>Copyright <span style={{fontWeight:"700",color:"#fff"}}>2021 Mazaa.</span> Designed by Webinane.</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
