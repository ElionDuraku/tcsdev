import React from "react";
import ProjectCardFilter from "./ProjectCardFilter";

function ProjectWrap(props) {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title"} ${props.white}`}>
              <span>TCS DEV</span>
              <h2>Projektet</h2>
              <p>
                Me poshte mund te shihni projektet tona qe kemi perfunduar ne fusha te ndryshme...
              </p>
            </div>
          </div>
          <ProjectCardFilter/>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap;
