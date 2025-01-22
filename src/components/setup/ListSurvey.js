import React from "react";

const ListSurvey = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-2">SEtup menu</h2>
        <div className="card text-white bg-primary mb-3 px-3 py-2 card-78">
          <div className="card-body">
            <h2 className="card-questions mt-1">Daftar Survey</h2>
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div className="row">
          <div className="col-md-12 list-survey">
            <div className="list-item">
              <div className="list-card card-78" data-key="">
                <div>1.</div>
                <div className="answer">
                  Siapakah karakter anime terpopuler?
                </div>
                <button
                  className="btn-lg button-77 xlg"
                  role="button"
                  data-key="1"
                >
                  <span className="btn-key">Lihat [1]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button
          className="btn-lg button-77 xlg"
          role="button"
          data-key="Backspace"
        >
          Back
          <span className="btn-key">[Backspace]</span>
        </button>
        <button className="btn-lg button-77 xlg" role="button" data-key="Enter">
          Tambah survey
          <span className="btn-key">[ENTER]</span>
        </button>
      </div>
    </>
  );
};

export default ListSurvey;
