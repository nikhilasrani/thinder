import { FETCH_RESTAURANTS } from "../actions/types";

const INITIAL_STATE = {
  results: [],
  nearby_restaurants: []
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload;
    default:
      return state;
  }
}
