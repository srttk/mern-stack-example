import { getProfile } from "../lib/TokenManager";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/auth-types";

const INIT_STATE = getProfile();

const AuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case USER_LOGGED_OUT:
      return null;
  }
  return state;
};

export default AuthReducer;
