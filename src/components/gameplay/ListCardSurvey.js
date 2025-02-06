import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllSurveys } from "../utils/surveyStorage";
import useKeyboardNavigation from "../utils/useKeyboardNavigation";

const ListCardSurvey = () => {

  const surveys = getAllSurveys();
  console.log(surveys);
  const navigate = useNavigate();

  useKeyboardNavigation(
    {
    "Backspace": "/main-menu"
    },
    () => {
      const dynamicRoutes = {};
      surveys.forEach((_, index)=>{
        const key = (index + 1) % 10;
        dynamicRoutes[key] = `/main-quis-survey/${index}`; 
      })
      return dynamicRoutes;
    }
  )

  return (
    <>
      <h1 className="text-center mb-2">pilih survey yang ingin dimainkan</h1>
      <div className="row row-cols-4 g-4">
        { surveys.map((survey, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div
              className="card text-white bg-primary mb-3 px-4 py-4 card-78"
              onClick={() => navigate(`/main-quis-survey/${index}`) }
            >
              <div className="card-body">
                <h1 className="card-title mt-3 no">#{index + 1 % 10}</h1>
                <h2 className="card-title mt-3">survey</h2>
                <span className="btn-key light">[{index + 1 % 10}]</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <button className="btn-lg button-77 xlg" onClick={()=>navigate("/main-menu")}>
          Main Menu
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
