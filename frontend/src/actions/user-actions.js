import { FETCH_USERS } from "../actions/user-types";
import { FetchUsers } from "../api";
export function fetchUsers() {
  return dispatch => {
    FetchUsers().then(res => {
      dispatch({ type: FETCH_USERS, payload: res.data });
    });
  };
}
