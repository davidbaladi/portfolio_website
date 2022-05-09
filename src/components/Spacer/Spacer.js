import React from "react";
import "./spacer.css";

const Spacer = () => {
  return (
    <div className="spacer-container">
      <div className="spacer-text">
        I have also done freelance work for
        <div className="spacer-space" />
        <a
          href="https://www.torontoguitarschool.com"
          target="_blank"
          rel="noreferrer"
        >
          www.torontoguitarschool.com
        </a>
        <div className="spacer-space" />
        &
        <div className="spacer-space" />
        <a href="https://www.mintmusic.ca" target="_blank" rel="noreferrer">
          www.mintmusic.com
        </a>
      </div>
      <span className="spacer-span-one" />
      <span className="spacer-span-two" />
      <span className="spacer-span-three" />
      <span className="spacer-span-four" />
      <span className="spacer-span-five" />
      <span className="spacer-span-six" />
      <span className="spacer-span-seven" />
    </div>
  );
};

export default Spacer;
