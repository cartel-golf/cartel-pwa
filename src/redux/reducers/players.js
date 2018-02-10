import * as actions from '../actions/actionNames';

// reducer for playersState slice of state

const initialState = {
  players: [],
  connectedPlayerIds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PLAYERS:
      return {...state, players: action.payload};
    case actions.UPDATE_CONNECTED_PLAYER_IDS:
      return {...state, connectedPlayerIds: action.payload};
    default:
      return state;
  }
};