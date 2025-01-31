import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import MainMenu from "./components/MainMenu";
import HowToPlay from "./components/HowToPlay";
import ListSurvey from "./components/setup/ListSurvey";
import AddSurvey from "./components/setup/AddSurvey";
import PreviewSurvey from "./components/setup/PreviewSurvey";
import EditSurvey from "./components/setup/EditSurvey";
import ListCardSurvey from "./components/gameplay/ListCardSurvey";
import MainQuisSurvey from "./components/gameplay/MainQuisSurvey";

function App() {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          {/* Home Section */}
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/main-menu" element={<MainMenu/>} />
          <Route path="/how-to-play" element={<HowToPlay/>} />
          {/* Setup Section */}
          <Route path="/list-survey" element={<ListSurvey/>} />
          <Route path="/add-survey" element={<AddSurvey/>} />
          <Route path="/preview-survey" element={<PreviewSurvey/>} />
          <Route path="/edit-survey" element={<EditSurvey/>} />
          {/* Gameplay Section */}
          <Route path="/list-card-survey" element={<ListCardSurvey/>} />
          <Route path="/main-quis-survey" element={<MainQuisSurvey/>} />
        </Routes>
      </div>
    </Router>
    // <div>
    //   <HomeScreen />
    //   <MainMenu />
    //   <HowToPlay />
    //   <ListSurvey />
    //   <AddSurvey />
    //   <PreviewSurvey />
    //   <EditSurvey />
    //   <ListCardSurvey />
    //   <MainQuisSurvey />
    // </div>
  );
}

export default App;
