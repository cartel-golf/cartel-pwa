import { combineReducers} from 'redux';
import systemReducer from './system';
import routerReducer from './router';
import userReducer from './user';
import playersReducer from './players';

export default combineReducers({
  systemState: systemReducer,
  routerState: routerReducer,
  userState: userReducer,
  playersState: playersReducer,
});