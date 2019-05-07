import _ from "lodash";
import { REHYDRATE } from "redux-persist/lib/constants";
import { LIKE_RESTAURANT, CLEAR_LIKED_RESTAURANTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedRestaurants || [];
    case LIKE_RESTAURANT:
      return _.uniqBy([action.payload, ...state], "restaurant.id");
    case CLEAR_LIKED_RESTAURANTS:
      return [];
    default:
      return state;
  }
}
