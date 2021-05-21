import React from "react";
import RRT from "react-rotating-text";
import Particles from "react-particles-js";
import "./index.css";
import { motion } from "framer-motion";

function Landing() {
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-10vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.5,
    },
  };
  return (
    <motion.div
      className="page landing-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
        Making Websites <RRT items={["Modern", "Responsive", "Optimized"]} />
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
      </div>
    </motion.div>
  );
}

export default Landing;
