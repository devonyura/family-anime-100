import React from "react";
import { useNavigate } from "react-router-dom";
// import "./HomeScreen.css";

const HomeScreen = () => {

  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <div className="row align-content-center px-3 py-3 text-center">
        <div className="col">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo-dummy.png`}
            alt="icon app"
            className="img-fluid"
            width="500"
          />
          {/* <h1>quis family anime 100!</h1> */}
          <button className="btn btn-primary btn-lg xlg" onClick={ ()=>navigate("/main-menu") }>Mulai!</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
