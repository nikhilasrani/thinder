import axios from "axios";
import {
  FETCH_RESTAURANT,
  FETCH_RESTAURANTS,
  LIKE_RESTAURANT,
  CLEAR_LIKED_RESTAURANTS
} from "./types";

export const fetchRestaurants = (region, callback) => async dispatch => {
  try {
    let { latitude, longitude } = region;
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
    let { data } = await axios.get(url, {
      headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" }
    });
    dispatch({ type: FETCH_RESTAURANTS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};

export const likeRestaurant = restaurant => {
  return {
    payload: restaurant,
    type: LIKE_RESTAURANT
  };
};

export const clearLikedRestaurants = () => {
  return {
    type: CLEAR_LIKED_RESTAURANTS
  };
};

export const fetchRestaurant = restaurant => async dispatch => {
  try {
    let res_id = restaurant.id;
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}`;
    let { data } = await axios.get(url, {
      headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" }
    });
    dispatch({ type: FETCH_RESTAURANT, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};
