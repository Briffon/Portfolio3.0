import React, { useState } from "react";
import "./index.css";
import Particles from "react-particles-js";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bsmith-portfolio.herokuapp.com/sendToMe",
        { name, text: message, email, subject },
        axiosConfig
      )
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        document.getElementById("form").reset();
        alert("Message Sent!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (input) => {
    let field = input.target.id;
    let value = input.target.value;

    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="page contact__container">
      <h2>Contact Me</h2>
      <div className="contact__container__items">
        <form id="form" onSubmit={submit}>
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
          <h3>Take the Next Step Now</h3>
          <div className="input-field">
            <input onChange={inputChange} id="name" placeholder="Name" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <input onChange={inputChange} id="email" placeholder="Email" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <input onChange={inputChange} id="subject" placeholder="Subject" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <textarea
              onChange={inputChange}
              id="message"
              placeholder="Message"
            />
            <span className="error-field"></span>
          </div>
          <button>Submit</button>
        </form>
        <div className="contact__container__cta">
          <div className="contact__container__cta__item">
            <p>
              <img src="./images/icons/email.png" alt="email icon" />
              btsmith@digitalbyte.io
            </p>
            <p>
              <img src="./images/icons/circle1158.png" alt="phone icon" />
              (678)-538-7485
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
