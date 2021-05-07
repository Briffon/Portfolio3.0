import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../jsons/projects.json";
import "./index.css";
import "./mobile.css";

function Project() {
  const [project, setProject] = useState("");
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
            <img src={arr[0]} alt={`${project.name} screenshot`} />
            <img src={arr[1]} alt={`${project.name} screenshot`} />
            <img src={arr[2]} alt={`${project.name} screenshot`} />
            <img src={arr[3]} alt={`${project.name} screenshot`} />
          </div>
        );

      case 3:
        return (
          <div className="project-page__container__about__imgs-3">
            <img src={arr[0]} alt={`${project.name} screenshot`} />
            <img src={arr[1]} alt={`${project.name} screenshot`} />
            <img src={arr[2]} alt={`${project.name} screenshot`} />
          </div>
        );

      case 2:
        return (
          <div className="project-page__container__about__imgs-2">
            <img src={arr[0]} alt={`${project.name} screenshot`} />
            <img src={arr[1]} alt={`${project.name} screenshot`} />
          </div>
        );

      case 1:
        return (
          <div className="project-page__container__about__imgs-1">
            <img src={arr[0]} alt={`${project.name} screenshot`} />
          </div>
        );

      default:
        break;
    }
  };
  return (
    <div className="page project-page__container">
      <h2>{project.name}</h2>
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
    </div>
  );
}

export default Project;
