import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from './Screens/App';
import User_Info from './Redux/Reducers';

const store = createStore(User_Info);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

