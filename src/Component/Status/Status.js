import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

//styles
import "./status.scss";

const Status = () => {
  return (
    <section className="status">
      <div className="status__head">Status</div>
      <div className="status__body">
        <ProgressBar />
        <div className="status__content">Lorem</div>
      </div>
    </section>
  );
};

export default Status;
