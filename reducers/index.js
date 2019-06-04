import { combineReducers } from "redux";
import restaurants from "./restaurants_reducer";
import likedRestaurants from "./likes_reducer";

export default combineReducers({
  restaurants,
  likedRestaurants
});
