import React from "react";
import "./index.css";
import Insta from "../images/icons/insta.png";
import Li from "../images/icons/in.png";
import Fb from "../images/icons/fb.png";
import Email from "../images/icons/email.png";
import Phone from "../images/icons/circle1158.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__container__quick-links">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Portfolio">Portfolio</a>
        <a href="/Contact">Contact</a>
      </div>
      <div className="footer__container__social-links">
        <h4>Social Links</h4>
        <div className="footer__container__social-links__icons">
          <img src={Insta} alt="instagram icon" />
          <img src={Li} alt="linkedin icon" />
          <img src={Fb} alt="facebook icon" />
        </div>
      </div>

      <div className="footer__container__contact">
        <h4>Contact Me</h4>
        <div className="footer__container__contact__field">
          <img src={Email} alt="email icon" />
          <p>btsmith@digitalbyte.io</p>
        </div>
        <div className="footer__container__contact__field">
          <img src={Phone} alt="phone icon" />
          <p>(678)-538-7485</p>
        </div>
      </div>

      <div className="footer__container__partner">
        <h4>Partner</h4>
        <div className="footer__container__partner__field">
          <img src={Email} alt="email icon" />
          <p>digitalbyteadmin@digitalbyte.io</p>
        </div>

        <div className="footer__container__partner__field">
          <img src={Phone} alt="phone icon" />
          <p>(678)-538-7485</p>
        </div>
      </div>
      <span>@Britton Smith 2021</span>
    </div>
  );
}

export default Footer;
