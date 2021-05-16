import React, { useState, useEffect } from "react";
import "./index.css";
import Logo from "../images/logo-white.png";
import Close from "../images/icons/close.png";
import Me from "../images/me.jpg";

function Nav(props) {
  const [post, setPost] = useState(0);

  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    setPost(y);
  });
  useEffect(() => {
    let regularNav = document.getElementsByClassName("nav__regular")[0];
    let mobileNav = document.getElementsByClassName("nav__mobile")[0];
    if (post >= 100) {
      if (!mobileNav.classList.contains("close")) {
        mobileNav.style.backgroundColor = "rgba(0,0,0,0.75)";
      }
      if (!regularNav.classList.contains("close")) {
        regularNav.style.backgroundColor = "rgba(0,0,0,0.75)";
      }
    } else if (post < 100) {
      if (!mobileNav.classList.contains("close")) {
        mobileNav.style.backgroundColor = "transparent";
      }
      if (!regularNav.classList.contains("close")) {
        regularNav.style.backgroundColor = "transparent";
      }
    }
  }, [post]);
  const openMobileNav = (e) => {
    e.preventDefault();
    document
      .getElementsByClassName("nav__mobile__menu")[0]
      .classList.remove("close");
    document.getElementsByClassName("nav__mobile")[0].classList.add("close");
    document.body.classList.add("stop-scrolling");
  };

  const closeMobileNav = (e) => {
    e.preventDefault();
    document
      .getElementsByClassName("nav__mobile__menu")[0]
      .classList.add("close");
    document.getElementsByClassName("nav__mobile")[0].classList.remove("close");
    document.body.classList.remove("stop-scrolling");
  };

  return (
    <div className="nav">
      <div className="nav__regular">
        <a href="/">
          <img className="nav-container-logo" src={Logo} alt="logo" />
        </a>

        <ul className="nav__regular__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <img src={Me} alt="Britton smith" />
        </ul>
      </div>

      <div className="nav__mobile">
        <a href="/">
          <img className="nav-container-logo" src={Logo} alt="logo" />
        </a>
        <div className="nav__mobile__hamburger" onClick={openMobileNav}>
          <div className="nav__mobile__hamburger-line"></div>
          <div className="nav__mobile__hamburger-line"></div>
          <div className="nav__mobile__hamburger-line"></div>
        </div>
      </div>
      <div className="nav__mobile__menu close">
        <img onClick={(e) => closeMobileNav(e)} src={Close} alt="close icon" />
        <ul className="nav__mobile__menu__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
