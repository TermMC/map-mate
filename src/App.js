import "./App.css";
import ChooseMeet from "./components/ChooseMeet";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="App">
      <div>
        <ChooseMeet />
        <Map />
      </div>
    </div>
  );
}

export default App;
