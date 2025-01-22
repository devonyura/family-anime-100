import React from "react";

const MainQuisSurvey = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-2">Preview Survey</h2>
        <div className="card text-white bg-primary mb-3 px-3 py-2 card-78">
          <div className="card-body">
            <h2 className="card-questions mt-3">
              siapakah karakter anime terpopuler?
            </h2>
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div className="row">
          <div className="col-md-6">
            <div className="list-item">
              <div className="list-card card-78 top-survey" data-key="1">
                <div>1.</div>
                <div className="answer">Naruto</div>
                <div className="number-circle">35</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="list-item">
              <div className="list-card card-78">
                <div>6. Sasuke</div>
                <div className="number-circle">5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg">
          kembali
          <span className="btn-key" data-key="">
            [Backspace]
          </span>
        </button>
        <button className="btn-lg button-77 xlg" data-key="Enter">
          EDIt <span className="btn-key">[E]</span>
        </button>
        <button className="btn-lg button-77 xlg" data-key="Enter">
          HAPUS
        </button>
      </div>
      <button className="btn btn-primary btn-sm info">
        <i className="bi bi-info-circle" data-key="i"></i>
      </button>
    </>
  );
};

export default MainQuisSurvey;
