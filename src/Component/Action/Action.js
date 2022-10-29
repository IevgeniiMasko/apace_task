import React, { useContext, useState } from "react";
import { authContext } from "../../App";

//Components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

//styles
import "./action.scss";

const Action = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const { isAuth, setIsAuth } = useContext(authContext);

  const authHandler = () => {
    new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => resolve(), 500);
    }).then(() => setIsAuth(true));
  };

  const modalHandler = () => {
    document.body.style.overflow = modal ? "unset" : "hidden";
    setModal((prev) => !prev);
  };

  return (
    <>
      <section className="actions">
        {isAuth ? (
          <>
            <div className="actions__status">
              Awating the package to be picked by the delivery company
            </div>
            <Button onClick={modalHandler} content="CTA button2" />
          </>
        ) : (
          <>
            <div className="actions__icon">Status icon</div>
            <Button
              onClick={authHandler}
              content={isLoading ? "Authorizing.." : "CTA button1"}
            />
          </>
        )}
      </section>
      {modal && <Modal modalHandler={modalHandler} />}
    </>
  );
};

export default Action;
