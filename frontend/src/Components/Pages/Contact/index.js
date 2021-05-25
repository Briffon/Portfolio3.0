import React, { useState } from "react";
import "./index.css";
import Particles from "react-particles-js";
import axios from "axios";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const validation = (e) => {
    let valid = true;
    const emptyCheck = /.*\S.*/;
    const nameCheck = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/gim;
    const emailCheck =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (nameCheck.test(name) === false || emptyCheck.test(name) === false) {
      setNameError("Please Enter a Valid Name");
      valid = false;
    }
    if (emailCheck.test(email) === false || emptyCheck.test(email) === false) {
      setEmailError("Please Enter a Valid Email");
      valid = false;
    }
    if (emptyCheck.test(message) === false) {
      setMessageError("Must Contain a Message");
      valid = false;
    }
    return valid;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validation() === true) {
      axios
        .post(
          "https://btsmithdev.com/api/sendToMe",
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
    }
  };

  const inputChange = (input) => {
    let field = input.target.id;
    let value = input.target.value;

    switch (field) {
      case "name":
        setName(value);
        if (nameError === "Please Enter a Valid Name") {
          setNameError("");
        }
        break;
      case "email":
        setEmail(value);
        if (emailError === "Please Enter a Valid Email") {
          setEmailError("");
        }
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        if (messageError === "Must Contain a Message") {
          setMessageError("");
        }
        break;
      default:
        break;
    }
  };

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
      className="page contact__container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
            {nameError !== "" ? (
              <span className="error-field">{nameError}</span>
            ) : null}
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <input onChange={inputChange} id="email" placeholder="Email" />
            {emailError !== "" ? (
              <span className="error-field">{emailError}</span>
            ) : null}
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
            {messageError !== "" ? (
              <span className="error-field">{messageError}</span>
            ) : null}
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
          <div className="contact__container__cta__item">
            <p>
              <img src="./images/icons/email.png" alt="email icon" />
              management@digitalbyte.io
            </p>
            <p>
              <img src="./images/icons/circle1158.png" alt="phone icon" />
              (616)-490-4608
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
