/* global google */
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Polyline } from "@react-google-maps/api";

const Route = () => {
  const [route, setRoute] = useState({ directions: null });
  const [loaded, setLoaded] = useState(false);

  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

  //   const path = [
  //     { lat: 37.772, lng: -122.214 },
  //     { lat: 21.291, lng: -157.821 },
  //     { lat: -18.142, lng: 178.431 },
  //     { lat: -27.467, lng: 153.027 },
  //   ];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: true,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  };

  const displayRoute = () => {
    const directionsService = new google.maps.DirectionsService();
    console.log("routing");
    directionsService.route(
      {
        origin: "Edinburgh, UK",
        destination: "York, UK",
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setRoute({ directions: result });
          setLoaded(true);
        } else {
          console.error("error fetching directions", result, status);
        }
      }
    );
  };

  return (
    <div>
      <Button variant="contained" onClick={displayRoute}>
        Display Route
      </Button>
      {loaded && (
        <Polyline
          onLoad={onLoad}
          path={route.directions.routes[0].overview_path}
          options={options}
        />
      )}
    </div>
  );
};

export default Route;
