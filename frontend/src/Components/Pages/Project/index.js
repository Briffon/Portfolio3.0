import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../jsons/projects.json";

function Project() {
  const [project, setProject] = useState("");
  const { id } = useParams();
  useEffect(() => {
    Projects.forEach((project, index) => {
      if (Number(id) === index) {
        setProject(project);
      }
    });
  }, [project]);
  return (
    <div className="page project-page__container">
      <h2>{project.name}</h2>
    </div>
  );
}

export default Project;
