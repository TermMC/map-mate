/* global google */
import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}

      <Route />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapContainer;
