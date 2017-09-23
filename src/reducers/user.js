import * as actions from '../actions/actionNames';
import userService from '../utils/userService';

// reducer for userState slice of state

export default (state = {user: userService.getUser()}, action) => {
  switch (action.type) {
    case actions.NEW_USER_TOKEN_SET:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};