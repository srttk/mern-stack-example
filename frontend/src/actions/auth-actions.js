import decode from "jwt-decode";
import { Login } from "../api";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./auth-types";
import { setToken, getToken, removeToken } from "../lib/TokenManager";
export const login = (email, password) => {
  return dispatch => {
    return Login(email, password).then(res => {
      const { token = null } = res.data;
      if (token) {
        setToken(token);
        const authData = decode(token);

        dispatch({ type: USER_LOGGED_IN, payload: authData });
      }

      return res;
    });
  };
};

export const logout = () => {
  removeToken();
  return {
    type: USER_LOGGED_OUT
  };
};
