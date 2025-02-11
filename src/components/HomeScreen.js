import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import SoundManager from "./utils/SoundManager";
import useKeyboardNavigation from "./utils/useKeyboardNavigation";
import Hint from "./../images/hint.svg"


const HomeScreen = () => {
  
  const navigate = useNavigate();

  // Handler keyika totmbol "Mulai!" diklik
  const handleStart = () => {
    navigate("/main-menu");
    // SoundManager.playClickSound();
  }

  useKeyboardNavigation({"Enter": "/main-menu"})

  useEffect(()=>{
    const handleEnterKey = (event) => {
      if (event.key === 'Enter') {
        SoundManager.playBacksoundSound();
      }
    }

    window.addEventListener("keydown",handleEnterKey);
    return () => {
      window.addEventListener("keydown",handleEnterKey);
    }

  }, [])

  return (
    <div className="overflow-hidden" onClick={()=>SoundManager.playBacksoundSound()}>
      <div className="row align-content-center px-3 text-center">
        <div className="col">
          <h1>Familiy Anime 100!</h1>
          <img
            src={Hint}
            alt="icon app"
            className="img-fluid"
            width="500"
          />
          <br></br>
          {/* <h1>quis family anime 100!</h1> */}
          <button className="btn btn-primary btn-lg xlg" onClick={handleStart}>Mulai! <span className="btn-key light">[Enter]</span></button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
