import { createStore, applyMiddleware } from 'redux';
import socketMiddleware from './middleware/socket';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      socketMiddleware
    )
  )
);
