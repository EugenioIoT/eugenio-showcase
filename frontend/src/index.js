import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import I18nt from './i18n/I18n';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import Entrypoint from './component/Entrypoint';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Entrypoint />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
