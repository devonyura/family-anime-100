import React from "react";
import { useNavigate } from "react-router-dom";

const ListCardSurvey = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mb-2">pilih survey yang ingin dimainkan</h1>
      <div className="row row-cols-4 g-4">
        <div className="col d-flex justify-content-center">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="1"
          >
            <div className="card-body">
              <h1 className="card-title mt-3 no">#1</h1>
              <h2 className="card-title mt-3">survey</h2>
              <span className="btn-key light">[1]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="2"
          >
            <div className="card-body">
              <h1 className="card-title mt-3 no">#2</h1>
              <h2 className="card-title mt-3">survey</h2>
              <span className="btn-key light">[2]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="3"
          >
            <div className="card-body">
              <h1 className="card-title mt-3 no">#3</h1>
              <h2 className="card-title mt-3">survey</h2>
              <span className="btn-key light">[3]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="4"
          >
            <div className="card-body">
              <h1 className="card-title mt-3 no">#4</h1>
              <h2 className="card-title mt-3">survey</h2>
              <span className="btn-key light">[4]</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div
            className="card text-white bg-primary mb-3 px-4 py-4 card-78"
            data-key="5"
          >
            <div className="card-body">
              <h1 className="card-title mt-3 no">#5</h1>
              <h2 className="card-title mt-3">survey</h2>
              <span className="btn-key light">[5]</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg" onClick={()=>navigate("/main-menu")}>
          Home screen
          <span className="btn-key" data-key="Backspace">
            [Backspace]
          </span>
        </button>
      </div>
      <button className="btn btn-primary btn-sm info">
        <i className="bi bi-info-circle" data-key="i"></i>
      </button>
    </>
  );
};

export default ListCardSurvey;
