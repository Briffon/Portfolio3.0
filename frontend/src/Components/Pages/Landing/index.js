import React from "react";
import RRT from "react-rotating-text";
import Particles from "react-particles-js";
import "./index.css";

function Landing() {
  return (
    <div className="page landing-container">
      <Particles
        width="100vw"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <h1>
        Making Websites <RRT items={["Modern", "Responsive", "Fast"]} />
      </h1>

      <div className="landing-container__icons">
        <a
          href="https://www.instagram.com/btsmithdev/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <img src="./images/icons/insta.png" alt="instagram logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/britton-smith-10522a1a3/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="./images/icons/in.png" alt="linkedin logo" />
        </a>

        {/* <a
          href="https://www.instagram.com/btsmithdev/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <img src="./images/icons/fb.png" alt="FaceBook logo" />
        </a> */}
      </div>
    </div>
  );
}

export default Landing;
