import React, { useState, useEffect } from "react";
import "./index.css";
import Projects from "../../jsons/projects.json";
import Project from "../../Project";
function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let pageIndex = page * 3;
    let tempArr = [];
    Projects.map((project, index) => {
      if (page === 1 && index <= 2) {
        tempArr.push(project);
      } else if (index >= 3 * (page - 1) && index < pageIndex && page !== 1) {
        tempArr.push(project);
      }
    });
    setProjects(tempArr);
  }, [page]);

  const goTo = (e, index) => {
    e.preventDefault();
    if (index === page) {
    } else {
      setPage(index);
    }
  };

  const previous = (e) => {
    e.preventDefault();
    let nextPage = page - 1;
    if (page !== 1) {
      setPage(nextPage);
      if (
        document
          .getElementsByClassName("portfolio__container__pagination-next")[0]
          .classList.contains("inactive")
      ) {
        document
          .getElementsByClassName("portfolio__container__pagination-next")[0]
          .classList.remove("inactive");
      }

      if (nextPage === 1) {
        document
          .getElementsByClassName(
            "portfolio__container__pagination-previous"
          )[0]
          .classList.add("inactive");
      }
    } else {
    }
  };

  const next = (e) => {
    e.preventDefault();
    let nextPage = page + 1;
    let between = 3 * nextPage - 3;
    if (Projects.length > between) {
      //   window.scrollTo(0, 0);
      setPage(nextPage);
      if (
        document
          .getElementsByClassName(
            "portfolio__container__pagination-previous"
          )[0]
          .classList.contains("inactive")
      ) {
        document
          .getElementsByClassName(
            "portfolio__container__pagination-previous"
          )[0]
          .classList.remove("inactive");
      }
      if (Projects.length < 3 * nextPage) {
        document
          .getElementsByClassName("portfolio__container__pagination-next")[0]
          .classList.add("inactive");
      }
    } else {
    }
  };

  return (
    <div className="page portfolio__container">
      <h2>Portfolio</h2>
      <div className="portfolio__container__items">
        {console.log(projects)}
        {projects
          ? projects.map((item, index) => {
              if (page > 1) {
                let modifier = index + (page - 1) * 3;
                return [
                  <Project
                    key={modifier}
                    name={item.name}
                    desc={item.desc}
                    img={item.previewImg}
                    date={item.date}
                  />,
                  <div className={`break-${index}`}></div>,
                ];
              } else {
                return [
                  <Project
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    img={item.previewImg}
                    date={item.date}
                  />,
                  <div className={`break-${index}`}></div>,
                ];
              }
            })
          : null}
      </div>
      <div className="portfolio__container__pagination">
        <img
          onClick={previous}
          src="./images/icons/prev.png"
          alt="previous projects"
          className=" inactive portfolio__container__pagination-previous"
        />
        <img
          onClick={next}
          className="portfolio__container__pagination-next"
          src="./images/icons/next.png"
          alt="next projects"
        />
      </div>
    </div>
  );
}

export default Portfolio;
