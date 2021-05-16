import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../jsons/projects.json";
import Close from "../../images/icons/close.png";
import "./index.css";
import "./mobile.css";
import { motion } from "framer-motion";

function Project() {
  const [project, setProject] = useState("");
  const [img, setImg] = useState("");
  const { id } = useParams();
  useEffect(() => {
    Projects.forEach((project, index) => {
      if (Number(id) === index) {
        setProject(project);
      }
    });
  }, [id]);

  const handleImgs = (imgs) => {
    let arr = [];
    imgs.forEach((img, index) => {
      arr.push(img);
    });
    switch (arr.length) {
      case 4:
        return (
          <div className="project-page__container__about__imgs-4">
            <img
              onClick={(e) => expand(e, arr[0])}
              src={arr[0]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[1])}
              src={arr[1]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[2])}
              src={arr[2]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[3])}
              src={arr[3]}
              alt={`${project.name} screenshot`}
            />
          </div>
        );

      case 3:
        return (
          <div className="project-page__container__about__imgs-3">
            <img
              onClick={(e) => expand(e, arr[0])}
              src={arr[0]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[1])}
              src={arr[1]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[2])}
              src={arr[2]}
              alt={`${project.name} screenshot`}
            />
          </div>
        );

      case 2:
        return (
          <div className="project-page__container__about__imgs-2">
            <img
              onClick={(e) => expand(e, arr[0])}
              src={arr[0]}
              alt={`${project.name} screenshot`}
            />
            <img
              onClick={(e) => expand(e, arr[1])}
              src={arr[1]}
              alt={`${project.name} screenshot`}
            />
          </div>
        );

      case 1:
        return (
          <div className="project-page__container__about__imgs-1">
            <img
              onClick={(e) => expand(e, arr[0])}
              src={arr[0]}
              alt={`${project.name} screenshot`}
            />
          </div>
        );

      default:
        break;
    }
  };

  const expand = (e, img) => {
    e.preventDefault();
    let container = document.getElementsByClassName(
      "project-page__container__expand"
    )[0];
    setImg(img);
    if (container.classList.contains("close")) {
      window.scrollTo(0, 50);
      container.classList.remove("close");
      document.body.classList.add("stop-scrolling");
    }
  };

  const close = (e) => {
    e.preventDefault();
    let container = document.getElementsByClassName(
      "project-page__container__expand"
    )[0];
    if (!container.classList.contains("close")) {
      container.classList.add("close");
      document.body.classList.remove("stop-scrolling");
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
      className="page project-page__container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div onClick={close} className="project-page__container__expand close">
        <div className="project-page__container__expand__content">
          <img onClick={close} src={Close} className="close-content" alt="x" />
          <img src={img} alt="expanded preview" className="img-content" />
        </div>
      </div>
      <h2>{project.name}</h2>
      <p>{project.job}</p>
      <span>{project.date}</span>
      <div className="project-page__container__about">
        {project.imgs ? handleImgs(project.imgs) : null}
        <p>{project.desc}</p>
      </div>
      {project.link ? (
        <a rel="noreferrer" target="_blank" href={project.link.toString()}>
          Visit Now
        </a>
      ) : null}
    </motion.div>
  );
}

export default Project;
