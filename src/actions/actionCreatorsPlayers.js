import * as actions from './actionNames';

export const fetchPlayersReq = () => {
  return {
    type: actions.FETCH_PLAYERS_REQ,
    meta: {
      auth: true,
      success: actions.FETCH_PLAYERS_SUC
    }
  }
};