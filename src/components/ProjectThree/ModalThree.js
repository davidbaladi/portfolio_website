import React from "react";
import "./modal-three.css";
import GoogleMapsApp from "./GoogleMapsApp";

const ModalThree = ({ showThree, fxnShowThree }) => {
  console.log("modal three rendered");

  return (
    <>
      {showThree ? (
        <div className="overlay-three" onClick={fxnShowThree} />
      ) : null}
      <div className={showThree ? "modal-three active" : "modal-three"}>
        <GoogleMapsApp />
        <div onClick={fxnShowThree} className="close-button-three">
          &times;
        </div>
      </div>
    </>
  );
};

export default ModalThree;
