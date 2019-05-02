import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import { FETCH_JOBS } from "./types";
import qs from "qs";

// const JOB_QUERY_PARAMS = {
//   publisher: "4201738803816157",
//   format: "json",
//   v: "2",
//   latlong: 1,
//   radius: 10,
//   q: "javascript"
// };

// const buildJobsUrl = zip => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   return `${JOB_ROOT_URL}${query}`;
// };

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let { latitude, longitude } = region;
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
    //let zip = 94016; //await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    //axios.get(url,{headers:"user-key:80e2eb2d12ef4fdbb35b2ade5120740d"})
    let { data } = await axios.get(url, {
      headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" }
    });
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};
