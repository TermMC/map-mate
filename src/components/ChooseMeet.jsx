import { apiKey } from "../apiKey";
import { getPlaces } from "../utils";
//promise being rejected. are queries formatted right? API working?
const ChooseMeet = () => {
  const coords = { lat: 53.959722, lng: -1.08715 };
  const { lat, long } = coords;
  const queries = {
    fields: "formatted_address,name,type,geometry,business_status",
    input: "cafe",
    inputtype: "textquery",
    locationbias: `circle:1000@${lat},${long}`,
    key: apiKey,
  };

  console.log(getPlaces(queries));
  return <p>I'll be a list of places one day son</p>;
};

export default ChooseMeet;
