import * as actions from './actionNames';

export const updateConnectedPlayerIds = (playerIds) => {
  return {
    type: actions.UPDATE_CONNECTED_PLAYER_IDS,
    payload: playerIds
  }
};