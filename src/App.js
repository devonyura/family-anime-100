import "./App.css";
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
    <div>
      {/* <HomeScreen /> */}
      {/* <MainMenu /> */}
      {/* <HowToPlay /> */}
      {/* <ListSurvey /> */}
      {/* <AddSurvey /> */}
      {/* <PreviewSurvey /> */}
      {/* <EditSurvey /> */}
      {/* <ListCardSurvey /> */}
      <MainQuisSurvey />
    </div>
  );
}

export default App;
