import { combineReducers} from 'redux';
import systemReducer from './system';
import userReducer from './user';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
});