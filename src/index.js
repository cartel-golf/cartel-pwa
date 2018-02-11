import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// connect to the socket.io server
import socket from './utils/socket';

socket.on('connect', () => {
  // Don't render until socket is connected
  ReactDOM.render(
    <Provider store={store} >
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});

registerServiceWorker();
