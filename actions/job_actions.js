import axios from "axios";
import { FETCH_JOBS, LIKE_JOB } from "./types";

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let { latitude, longitude } = region;
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
    let { data } = await axios.get(url, {
      headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" }
    });
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = job => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};
