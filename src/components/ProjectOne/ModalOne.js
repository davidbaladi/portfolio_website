import React from "react";
import "./modal-one.css";
import TodoApp from "./TodoApp";

const ModalOne = ({ showOne, fxnShowOne }) => {
  console.log("modal one rendered");
  return (
    <>
      {showOne ? <div className="overlay" onClick={fxnShowOne} /> : null}
      <div className="modal-one">
        <TodoApp />
        <div onClick={fxnShowOne} className="close-button">
          &times;
        </div>
      </div>
    </>
  );
};

export default ModalOne;
