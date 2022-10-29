import React from "react";

import "./progressbar.scss";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item active">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
      <div className="progress-bar__item">
        <div className="progress-bar__circle"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
