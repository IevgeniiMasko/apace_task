import React from "react";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

//styles
import "./modal.scss";

const Modal = ({ modalHandler }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <ProgressBar />
        <div className="modal__content"></div>
        <Button onClick={modalHandler} content="Close" />
      </div>
    </div>
  );
};

export default Modal;
