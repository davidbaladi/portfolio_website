import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro" id="about-me">
        <div className="intro-img">
          <span className="intro-img-span-one" />
          <span className="intro-img-span-two" />
          <span className="intro-img-span-three" />
          <span className="intro-img-span-four" />
        </div>
        <div className="intro-text">
          <div className="intro-text-p">
            Toronto-based <b>React Software Developer</b> with a questioning
            work ethic!
            <p className="intro-spacer" />
            <b>My Philosophy:</b>
            <br />
            To adopt total project knowledge to leverage my decision making and
            communication expertise throughout project lifecycles.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
