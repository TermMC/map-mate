import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const { apiKey } = require("../apiKey");
const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const centre = { lat: 53.959722, lng: -1.08715 };

const options = {
  //   disableDefaultUI: true,
  //   zoomControl: true,
};
const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  console.log("Key", apiKey);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={centre}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default Map;
