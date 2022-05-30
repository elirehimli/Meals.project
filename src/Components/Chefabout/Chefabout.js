import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Chefabout.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { GiCook } from "react-icons/gi";
import { RiFlag2Line } from "react-icons/ri";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Chef() {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/Resulzadeemin/chefList/chefList/${id}`)
    .then((response) => setChef(response.data))
      .catch((error) => {alert("connect problem..");});
  });
  return (
    <div className="chefabout">
      <Navbar />
      <div className="container">
        {chef && (
          <div className="container">
            <div className="chefAboutt">
              <div>
                <img src={chef.url} />
              </div>

              <div className="chefAboutt-text">
                <h3>{chef.recips} Recipe</h3>
                <h2>{chef.name}</h2>
                
                <div className="chefs-social">
                  <a href="#"><FaFacebookF className="chef-social-1"/></a> 
                  <a href="#"><AiOutlineGoogle className="chef-social-1"/></a>
                  <a href="#"><AiOutlineTwitter className="chef-social-1"/></a>
                  <a href="#"><FaLinkedinIn className="chef-social-1"/></a>
              </div>
              </div>

              <div>
                <div className="chefAboutt-content">
                  <GiCook className="chefAboutt-icon" />
                  <span>Experience:</span>
                </div>
                <div className="chefAboutt-content">
                  <RiFlag2Line className="chefAboutt-icon" />
                  <span>Nationality:</span>
                </div>
                <div className="chefAboutt-content">
                  <BsTelephonePlus className="chefAboutt-icon" />
                  <span>Phone:</span>
                </div>
                <div className="chefAboutt-content">
                  <AiOutlineMail className="chefAboutt-icon" />
                  <span>Email:</span>
                </div>  
             </div>

                <div className="chefAboutt-info">
                  <h4>12 Years</h4>
                  <h4>New Zealand</h4>
                  <h4>(973) 344 78410</h4>
                  <h4>username@domain.com</h4>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Chef;
