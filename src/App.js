import "./App.css";
import ChooseMeet from "./components/ChooseMeet";
import Map from "./components/map/Map";
import MapContainer from "./components/map/MapContainer";

function App() {
  return (
    <div className="App">
      <div>
        <ChooseMeet />
        <Map />
        APP
        <MapContainer />
      </div>
    </div>
  );
}

export default App;
