import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // import CSS Style 
import { BrowserRouter } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from './Screens/App';
import User_Info from './Redux/Reducers';

// Create Redux Store 
// Note : createStore need at least one reducer 
const store = createStore(User_Info);

ReactDOM.render(
  <React.Fragment>
    {/* Wrapping the Aplication to Allow Redux store Accessing in all screens */}
    <Provider store={store}>
      {/* basename={process.env.PUBLIC_URL} to make sure that will run without no problem on host */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

