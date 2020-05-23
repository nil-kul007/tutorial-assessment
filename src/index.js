import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './store';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './components/App';

ReactDOM.render(
  <Provider store={Store()}>
   <App />
  </Provider>,
  document.getElementById('root')
 );

serviceWorker.unregister();
