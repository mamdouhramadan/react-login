import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter  } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from './Screens/App';
import User_Info from './Redux/Reducers';

const store = createStore(User_Info);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <HashRouter >
        <App />
      </HashRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

