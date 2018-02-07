import * as actions from './actionNames';

export const newUserTokenSet = (userFromToken) => {
  return {
    type: actions.NEW_USER_TOKEN_SET,
    payload: userFromToken
  }
};

