import * as actions from '../actions/actionNames';

// reducer for system related state

const initialState = {
  connected: false,
  sideDrawerOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_DRAWER:
      return {...state, sideDrawerOpen: action.payload};
    case actions.WS_CONNECT:
      return {...state, connected: true};
    case actions.WS_DISCONNECT:
      return {...state, connected: false};
    default:
      return state;
  }
};