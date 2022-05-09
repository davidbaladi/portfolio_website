import React from "react";
import "./project-four.css";
import "./modal-four.css";

const ProjectFour = ({ fxnShowFour }) => {
  return (
    <div className="project-four-container">
      <div className="project-four" id="crypto-app">
        <div className="project-four-img-container">
          <span className="project-four-img-span-one" />
          <span className="project-four-img-span-two" />
          <span className="project-four-img-span-three" />
          <span className="project-four-img-span-four" />
          <div className="project-four-img" onClick={fxnShowFour} />
        </div>
        <div className="project-four-text">
          <p className="project-title">Crypto App</p>
          <p className="project-four-info">
            Curious about blockchain? So am I! Follow the latest trends with
            live cryptocurrency data using the application I created.
          </p>
          <a
            className="project-four-demo-button"
            href="https://github.com/davidbaladi/react_cryptocurrency_app"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectFour;
