import * as actions from './actionNames';

export const setCartel = (cartel) => {
  return {
    type: actions.SET_CARTEL,
    payload: cartel
  }
};
