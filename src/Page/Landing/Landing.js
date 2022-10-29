import React, { useContext } from "react";
import { authContext } from "../../App";
import Action from "../../Component/Action/Action";
import RefundDetails from "../../Component/RefundDetails/RefundDetails";
import Status from "../../Component/Status/Status";

//styles
import "./landing.scss";

const Landing = () => {
  const { isAuth } = useContext(authContext);

  return (
    <div className="landing">
      <header className="landing__head">Logo block</header>

      <main className="landing__main">
        <RefundDetails />
        {isAuth && <Status />}
        <Action />
      </main>
    </div>
  );
};

export default Landing;
