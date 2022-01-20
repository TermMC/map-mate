/* global google */
import React from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { apiKey } from "./apiKey";
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
  //     googleMapsApiKey: apiKey,
  //   });
  const [position, setPosition] = useState({ lat: 53.959722, lng: -1.08715 });
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"],
    };
    const service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return true ? (
    <LoadScript googleMapsApiKey={apiKey} mapIds={["6a513aa1b67a0f1e"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={7}
        // // onLoad={onLoad}
        // onUnmount={onUnmount}
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
