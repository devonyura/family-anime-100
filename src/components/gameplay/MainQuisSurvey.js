import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSurveyByIndex } from "../utils/surveyStorage";

const MainQuisSurvey = () => {

  const { index } = useParams();
  const survey = getSurveyByIndex(index);

  const navigate = useNavigate();

  if (!survey) {
    return <p>Survey tidak ditemukan</p>
  }

  console.log(survey);
  return (
    <>
      <div className="text-center">
        <h2 className="mb-2">Main Quis Survey</h2>
        <div className="card text-white bg-primary mb-3 px-3 py-2 card-78">
          <div className="card-body">
            <h2 className="card-questions mt-3">
              {survey.question}
            </h2>
          </div>
        </div>
      </div>
      <div className="container my-1">
        <div className="row">
          <div className="col-md-6">
            { survey.answers.slice(0,5).map((item, index)=>(
              <div className="list-item" key={index}>
                <div className={`list-card card-78 ${index === 0 ? "top-survey": ""}`} data-key="1">
                  <div>{index + 1}.</div>
                  <div className="answer">{item.answer}</div>
                  <div className="number-circle">{item.points}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            { survey.answers.slice(5,10).map((item, index)=>(
                <div className="list-item" key={index + 5}>
                  <div className="list-card card-78" data-key="1">
                    <div>{index + 5}.</div>
                    <div className="answer">{item.answer}</div>
                    <div className="number-circle">{item.points}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg" onClick={()=>navigate("/list-card-survey")}>
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
