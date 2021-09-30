import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/RegisterConstansts";


 export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { loading: true };
      case REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };