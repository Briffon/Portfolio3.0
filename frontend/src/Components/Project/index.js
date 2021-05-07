import React from "react";
import Particles from "react-particles-js";
import Button from "../Button";
import "./index.css";

function Project(props) {
  return (
    <div className="project__container">
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
      <h3>{props.name}</h3>
      <span>{props.date}</span>
      <img src={props.img} alt={`${props.name} preview`} />
      <p>{props.desc}</p>
      <a href={`/Project/${props.id}`}>Full Project</a>
    </div>
  );
}

export default Project;
