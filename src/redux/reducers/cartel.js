import * as actions from '../actions/actionNames';

// reducer for cartelState slice of state

const initialState = {
  name: '',
  defaultCourse: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CARTEL:
      return {...state, name: action.payload.name, defaultCourse: action.payload.defaultCourse}
    default:
      return state;
  }
};