//*****DEPRECIATED */

// /* global google */
// import React, { useEffect, useState } from "react";
// // import GoogleMapReact from "google-map-react";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   Polyline,
// } from "@react-google-maps/api";
// // import { LoadScript } from "@react-google-maps/api";
// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// // import LocationOnOutlinedIcon from "@material-ui/icons";
// // import Rating from "@material-ui/lab";
// import { apiKey } from "./apiKey";
// import { Button } from "@mui/material";

// // import useStyles from "./styles";
// // const directionsService = new DirectionsService();
// const Map = () => {
//   // const classes = useStyles();
//   const isMobile = useMediaQuery("(min-width:600px)");

//   const [route, setRoute] = useState({ directions: null });
//   const [loaded, setLoaded] = useState(false);

//   const coords = { lat: 53.959722, lng: -1.08715 };

//   useEffect(() => {}, [route]);

//   const displayRoute = () => {
//     const directionsService = new google.maps.DirectionsService();
//     console.log("routing");
//     directionsService.route(
//       {
//         origin: "Liverpool, UK",
//         destination: "Oxford, UK",
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           console.log(result);
//           setRoute({ directions: result });
//           setLoaded(true);
//         } else {
//           console.error("error fetching directions", result, status);
//         }
//       }
//     );
//   };

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <Button onClick={displayRoute}>Display Route</Button>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: apiKey }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={8}
//         margin={[50, 50, 50, 50]}
//         options={""}
//         // onChange={}
//         // onChildClick={""}
//       >
//         {loaded && (
//           <Polyline
//             path={route.directions.routes[0].overview_path}
//             geodesic={false}
//             options={{
//               strokeColor: "#38B44F",
//               strokeOpacity: 1,
//               strokeWeight: 7,
//             }}
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;
