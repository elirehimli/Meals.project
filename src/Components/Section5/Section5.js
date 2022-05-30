import React from "react";
import Chef from "../Chefs/Chef";
import "./Section5.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Section5() {
  return (
    <div className="section-5-bg">
     <div className="container">
        <div className="section-5">
          <h3>Expert and Professional</h3>
          <h2>TOP CHEF’S RECIPS</h2>
        </div>
        <Chef />
        <div className="chefs-contact">
          <div>
            <FiPhoneCall className="icon-call" />
          </div>
          <div className="chefs-number">
            <h3>Waiting Your Call: ( 378 ) 400-1234</h3>
          </div>
        </div>
        <div className="chefs-social">
          <a href="#"><FaFacebookF className="chef-social-1"/></a> 
          <a href="#"><AiOutlineGoogle className="chef-social-1"/></a>
          <a href="#"><AiOutlineTwitter className="chef-social-1"/></a>
          <a href="#"><FaLinkedinIn className="chef-social-1"/></a>
        </div>
      </div>
    </div>
  );
}

export default Section5;
