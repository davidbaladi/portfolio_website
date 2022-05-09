import React from "react";
import "./project-three.css";

const Three = ({ fxnShowThree }) => {
  return (
    <div className="project-three-container">
      <div className="project-three" id="google-maps">
        <div className="project-three-text">
          <p className="project-title">Google Maps</p>
          <p className="project-three-info">
            With the use of <b>Axios</b> and <b>RapidAPI's Travel Advisor</b>{" "}
            and <b>Open Weather Map</b>, I developed the following Google Maps
            clone.
            <br />
            <br />
            Feel free to search for your favorite places with the demo
            available.
          </p>
          <a
            className="project-three-demo-button"
            href="https://github.com/davidbaladi/react_travel_advisor_app"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
        <div className="project-three-img-container" onClick={fxnShowThree}>
          <span className="project-three-img-span-one" />
          <span className="project-three-img-span-two" />
          <span className="project-three-img-span-three" />
          <span className="project-three-img-span-four" />
          <div className="project-three-img" />
        </div>
      </div>
    </div>
  );
};

export default Three;
