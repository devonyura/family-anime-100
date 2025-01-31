import React from "react";
import { useNavigate } from "react-router-dom";

const AddSurvey = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center">
        <h2 className="mb-2">tambah survey</h2>
        <div className="card text-white bg-primary mb-3 px-3 py-2 card-78 form">
          <div className="card-body">
            <input
              type="text"
              className="form-control card-questions text-center"
              placeholder="masukkan soal survey disini"
            />
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div className="row">
          <div className="col-md-6">
            <div className="list-item">
              <div className="list-card card-78">
                <div>1.</div>
                <div className="answer">
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="isi jawaban top survey #1"
                  />
                </div>
                <div className="number-circle form">
                  <input
                    type="number"
                    maxLength="3"
                    className="form-control text-center"
                    placeholder="no"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg" onClick={()=>navigate("/list-survey")}>
          Back
          <span className="btn-key" data-key="">
            [Backspace]
          </span>
        </button>
        <button className="btn-lg button-77 xlg" data-key="Enter">
          SIMPAN <span className="btn-key">[enter]</span>
        </button>
      </div>
    </>
  );
};

export default AddSurvey;
