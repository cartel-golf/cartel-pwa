import * as actions from '../actions/actionNames';

// reducer for system related state

const initialState = {
  connected: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.WS_CONNECT:
      return {...state, connected: true};
    case actions.WS_DISCONNECT:
      return {...state, connected: false};
    default:
      return state;
  }
};