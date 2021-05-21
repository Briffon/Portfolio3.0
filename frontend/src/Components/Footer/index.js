import React from "react";
import "./index.css";
import Insta from "../images/icons/insta.png";
import Li from "../images/icons/in.png";
import Fb from "../images/icons/fb.png";
import Email from "../images/icons/email.png";
import Phone from "../images/icons/circle1158.png";
import "./mobile.css";

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
          <a
            href="https://www.instagram.com/btsmithdev/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Insta} alt="instagram icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/britton-smith-10522a1a3/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Li} alt="linkedin icon" />
          </a>
        </div>
      </div>
      <div className="break"></div>
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
          <p>management@digitalbyte.io</p>
        </div>

        <div className="footer__container__partner__field">
          <img src={Phone} alt="phone icon" />
          <p>(616)-490-4608</p>
        </div>
      </div>
      <div className="footer__container__copyright">
        <p>@Britton Smith 2021</p>
      </div>
    </div>
  );
}

export default Footer;
