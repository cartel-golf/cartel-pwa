import { combineReducers} from 'redux';
import systemReducer from './system';
import routerReducer from './router';
import cartelReducer from './cartel';
import userReducer from './user';
import playersReducer from './players';

export default combineReducers({
  systemState: systemReducer,
  routerState: routerReducer,
  cartelState: cartelReducer,
  userState: userReducer,
  playersState: playersReducer,
});