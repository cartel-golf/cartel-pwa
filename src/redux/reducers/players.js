import * as actions from '../actions/actionNames';

// reducer for playersState slice of state

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHED_PLAYERS:
      return {players: [{name: 'Test Player'}] };
    default:
      return state;
  }
};