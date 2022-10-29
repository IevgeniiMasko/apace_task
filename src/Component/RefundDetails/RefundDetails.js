import React, { useContext, useEffect, useState } from "react";

//Components
import RefundItem from "../RefundItem/RefundItem";

//data
import { refundData } from "../../data/refundData";

//store
import { authContext } from "../../App";

//styles
import "./refunddetail.scss";

const RefundDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [refundItems, setRefundItems] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const { isAuth } = useContext(authContext);
  const [collapsedDetails, setCollapsedDetails] = useState(isAuth);

  const expandHandler = () => {
    setCollapsedDetails((prev) => !prev);
  };

  useEffect(() => {
    //imitate the request to server
    new Promise((resolve) => {
      setTimeout(() => resolve(refundData), 500);
    }).then((data) => {
      setIsLoading(false);
      setRefundItems(data);
      setTotalAmount(data.reduce((sum, item) => sum + item.amount, 0));
    });
  }, []);

  useEffect(() => {
    setCollapsedDetails((prevState) => !prevState);
  }, [isAuth]);

  return (
    <section className={`refunds ${collapsedDetails && "collapse"}`}>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="refunds__head">
            <div className="refunds__head-text">Refund details</div>
            <div className="refunds__head-fund">${totalAmount}</div>
          </div>

          <div className="refunds__body">
            {refundItems
              .filter((_, index) => {
                return !collapsedDetails ? true : index === 0 ? true : false;
              })
              .map((item) => {
                return (
                  <RefundItem
                    key={item.id}
                    img={item.img}
                    content={item.content}
                  />
                );
              })}
          </div>
          {isAuth && (
            <div className="refunds__arrow-expand" onClick={expandHandler}>
              {collapsedDetails ? "↓" : "↑"}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default RefundDetails;
