import { combineReducers} from 'redux';
import systemReducer from './system';
import userReducer from './user';
import playersReducer from './players';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
  playersState: playersReducer,
});