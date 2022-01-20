/* global google */
import React from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { apikey } from "./apiKey";
import Map from "./Map";
import Route from "./Route";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const coords = { lat: 53.959722, lng: -1.08715 };

const MapContainer = () => {
  //   const { isLoaded } = useJsApiLoader({
  //     id: "google-map-script",
  //     googleMapsApiKey: apikey,
  //   });
  const [position, setPosition] = useState({ lat: 53.959722, lng: -1.08715 });
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return true ? (
    <LoadScript googleMapsApiKey={apikey} mapIds={["6a513aa1b67a0f1e"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={7}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        mapIds={["6a513aa1b67a0f1e"]}
      >
        {/* Child components, such as markers, info windows, etc. */}

        <Route />
      </GoogleMap>
    </LoadScript>
  ) : (
    <></>
  );
};

export default MapContainer;
