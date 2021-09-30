import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
} from "../constants/profileConstants";

export const userProfileReducer = (state = {user:{}}, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { ...state,loading: true };
    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
