import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';

import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
