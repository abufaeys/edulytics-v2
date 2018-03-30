import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import '../node_modules/react-vis/dist/style.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

/*
  This file is not to be edited
*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{height:"100%"}}>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
	document.querySelector('#root')
);
registerServiceWorker();
