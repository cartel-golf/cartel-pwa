import userService from '../utils/userService';

// reducer for userState slice of state

export default (state = {user: userService.getUser()}, action) => {
  return state;
};