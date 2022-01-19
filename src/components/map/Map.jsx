import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons";
import Rating from "@material-ui/lab";
import { apiKey } from "../../apiKey";

// import useStyles from "./styles";

const Map = () => {
  // const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coords = { lat: 53.959722, lng: -1.08715 };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        // onChange={}
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
