import React, { useState } from "react";
import Button from "../Button";
import Particles from "react-particles-js";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./index.css";

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleOpen = (e) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  return (
    <motion.div className={`card__container ${props.class}`}>
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.3,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="card__container__picture">
        <img src={props.image} alt={`${props.name} icon`} />
      </div>
      <div className="card__container__text">
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
      <Button content="Read More" onClick={(e) => props.animate(e)} />
    </motion.div>
  );
}

export default Card;
