import React from "react";
import "./modal-four.css";
import CryptoApp from "./CryptoApp";

const ModalFour = ({ showFour, fxnShowFour }) => {
  console.log("modal four rendered");

  return (
    <>
      {showFour ? <div className="overlay-four" onClick={fxnShowFour} /> : null}
      <div className="modal-four">
        <CryptoApp />
        <div onClick={fxnShowFour} className="close-button-four">
          &times;
        </div>
      </div>
    </>
  );
};

export default ModalFour;
