import React from "react";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {

  const navigate = useNavigate();

  return (
    <div className="py-5" id="apps">
      <div className="row align-content-center text-center">
        <h1 className="text-center mb-5">quis family anime 100!</h1>
        <div className="col d-flex justify-content-end">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="2"
          >
            <div className="card-body" onClick={()=>navigate("/how-to-play")}>
              <img
                src="assets/logo-dummy.png"
                alt="icon app"
                className="img-fluid"
                width="200"
              />
              <h2 className="card-title mt-3">cara bermain</h2>
              <span className="btn-key light">[2]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center" onClick={()=>navigate("/list-card-survey")}>
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="1"
          >
            <div className="card-body">
              <img
                src="assets/logo-dummy.png"
                alt="icon app"
                className="img-fluid"
                width="200"
              />
              <h2 className="card-title mt-3">main</h2>
              <span className="btn-key light">[1]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-start" onClick={()=>navigate("/list-survey")}>
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="3"
          >
            <div className="card-body">
              <img
                src="assets/logo-dummy.png"
                alt="icon app"
                className="img-fluid"
                width="200"
              />
              <h2 className="card-title mt-3">setup</h2>
              <span className="btn-key light">[3]</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button className="btn-lg button-77 xlg" onClick={()=>navigate("/")}>
            Home screen
            <span className="btn-key" data-key="Backspace">
              [Backspace]
            </span>
          </button>
        </div>
      </div>
      <button className="btn btn-primary btn-lg info">
        <i className="bi bi-info-circle" data-key="i"></i>
      </button>
    </div>
  );
};

export default MainMenu;
