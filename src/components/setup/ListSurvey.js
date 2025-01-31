import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSurveys } from "../utils/surveyStorage";

const ListSurvey = () => {
  // initializeSurveyData();

  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  // Fetch data from localStorage
  useEffect(()=>{
    const surveyFromStorage = getAllSurveys();
    setSurveys(surveyFromStorage);
  }, []);

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
            {surveys.map((survey, index)=>(
              <div className="list-item" key={index}>
                <div className="list-card card-78" data-key="">
                  <div>{index + 1}.</div>
                  <div className="answer">
                    {survey.question}
                  </div>
                  <button className="btn-lg button-77 xlg">
                    <span className="btn-key">Lihat Lengkap [1]</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg" data-key="Backspace" onClick={()=>navigate("/main-menu")}>
          Back
          <span className="btn-key">[Backspace]</span>
        </button>
        <button className="btn-lg button-77 xlg"  data-key="Enter" onClick={()=>navigate("/add-survey")}>
          Tambah survey
          <span className="btn-key">[ENTER]</span>
        </button>
      </div>
    </>
  );
};

export default ListSurvey;
