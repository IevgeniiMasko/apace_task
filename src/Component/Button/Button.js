import React from "react";

//styles
import "./button.scss";

const Button = ({ onClick, content }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
