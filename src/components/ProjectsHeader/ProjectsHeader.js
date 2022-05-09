import React from "react";
import "./projectsheader.css";

const ProjectsHeader = () => {
  return (
    <div className="projects-header-container">
      <div className="projects-header" id="projects">
        <div className="projects-header-img">
          <span className="projects-header-img-span-one" />
          <span className="projects-header-img-span-two" />
          <span className="projects-header-img-span-three" />
          <span className="projects-header-img-span-four" />
          <span className="projects-header-img-span-five" />
          <span className="projects-header-img-span-six" />
          {/* <span className="projects-header-img-span-seven" />
          <span className="projects-header-img-span-eight" />
          <span className="projects-header-img-span-nine" />
          <span className="projects-header-img-span-ten" />
          <span className="projects-header-img-span-eleven" /> */}
        </div>
        <div className="projects-header-text">
          I enjoy the whole cycle of innovation: research, prototyping,
          engineering and presentation.
          <br />
          <br />
          <b>Technologies:</b>&nbsp; HTML · CSS · JavaScript · Git · React ·
          Redux · TypeScript · Sass · Axios · Node · Express · GCP · Python ·
          Kaggle · Pramp
        </div>
        <div className="title">Projects</div>
      </div>
      <span className="projects-header-span-one" />
      <span className="projects-header-span-two" />
      <span className="projects-header-span-three" />
      <span className="projects-header-span-four" />
    </div>
  );
};

export default ProjectsHeader;
