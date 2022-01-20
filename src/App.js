import "./App.css";
import ChooseMeet from "./components/ChooseMeet";
import Map from "./components/Mapv2";
import MapContainer from "./components/map/MapContainer";
import Search from "./components/PlacesSearch";

function App() {
  return (
    <div className="App">
      <div>
        <Search />
        {/* <ChooseMeet /> */}
        <Map />
        APP
        {/* <MapContainer /> */}
      </div>
    </div>
  );
}

export default App;
