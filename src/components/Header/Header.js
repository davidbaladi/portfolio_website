import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import PDF from "./React_Developer_David_Baladi.pdf";

const Header = () => {
  const onResumeClick = () => {
    window.open(PDF, "_blank");
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="my-name">David Baladi</div>
        <div className="my-occupation">Front End Developer</div>
        <div className="header-buttons">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="header-button projects"
          >
            Projects
          </Link>
          <div className="header-button resume" onClick={onResumeClick}>
            Resume
            <i className="fas fa-file-download" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
