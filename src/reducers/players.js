import * as actions from '../actions/actionNames';
// import userService from '../utils/userService';

// reducer for userState slice of state

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLAYERS_REQ:
      return {players: [{name: 'Test Player'}] };
    default:
      return state;
  }
};