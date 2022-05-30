import React from "react";
import "./AboutUs.css";
import Header3 from "../Header3/Header3";
import Section5 from "../Section5/Section5";
import Section7 from "../Section7/Section7";
import res1 from "../Img/ress-1.jpg";
import res2 from "../Img/ress-2.jpg";
import res3 from "../Img/ress-3.jpg";
import res4 from "../Img/ress-4.jpg";
import res5 from "../Img/ress-5.jpg";
import res6 from "../Img/ress-6.jpg";
function AboutUs() {
  return (
    <div className="header-2">
      <Header3 />
      <Section5 />
      <div className="container">
        <Section7 />
      </div>
      <div className="container">
        <div class="container-img">
          <div class="box">
            <img src={res1} />
            <span>6100 Rd, Houston United State</span>
          </div>
          <div class="box">
            <img src={res2} />
            <span>8383 Westheimer United State</span>
          </div>
          <div class="box">
            <img src={res3} />
            <span>8383 Westheimer United State</span>
          </div>
        </div>
        <div class="container-img">
          <div class="box">
            <img src={res4} />
            <span>6100 Rd, Houston United State</span>
          </div>
          <div class="box">
            <img src={res5} />
            <span>8383 Westheimer United State</span>
          </div>
          <div class="box">
            <img src={res6} />
            <span>8383 Westheimer United State</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
