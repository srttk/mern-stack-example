import { FETCH_USERS, UPDATE_USER, DELEDTE_USER } from "../actions/user-types";
const USER_INIT_STATE = {
  list: []
};

const UserReducer = (state = USER_INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, list: action.payload };
    case UPDATE_USER:
      const userlist = [...state.list];
      const idx = userlist.findIndex(u => u.id === action.payload.id);
      if (idx > -1) {
        userlist[idx] = action.payload.data;
      }
      return { ...state, list: userlist };

    case DELEDTE_USER:
      const _list = [...state.list];
      const index = _list.findIndex(u => u.id === action.payload.id);
      if (index > -1) {
        _list.splice(index, 1);
      }
      return { ...state, list: _list };
  }
  return state;
};

export default UserReducer;
