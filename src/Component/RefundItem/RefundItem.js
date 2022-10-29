import React from "react";

import "./refunditem.scss";

const RefundItem = ({ img, content }) => {
  return (
    <div className="refund-item">
      <div className="refund-item__img">
        <img src={img} alt="img not found" />
      </div>
      <div className="refund-item__content">{content}</div>
    </div>
  );
};

export default RefundItem;
