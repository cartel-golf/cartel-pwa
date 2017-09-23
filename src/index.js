import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './index.css';
import './override.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import 'typeface-roboto';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import socket from './utils/socket';
socket.on('message-from-server', function() {console.log('recieved message from server')})

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
