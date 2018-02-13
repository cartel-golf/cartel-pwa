import * as actions from '../actions/actionNames';
import routes from '../../routeConfig';

// reducer for router related state

const initialState = {
  curRoute: routes.allRounds
};

export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};