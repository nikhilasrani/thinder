import _ from "lodash";
import { REHYDRATE } from "redux-persist/lib/constants";
import { LIKE_JOB, CLEAR_LIKED_JOBS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedJobs || [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], "restaurant.id");
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
