import axios from "axios";

const api = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/findplacefromtext",
});

export const getPlaces = (queries) => {
  return api
    .get("/json", { params: queries })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("Error", err));
};
