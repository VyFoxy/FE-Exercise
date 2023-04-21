import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/reducer/rootReducer';
import './i18n/i18n.ts';
const reduxStore =createStore(rootReducer)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
        <App />
    </Provider>
  </BrowserRouter>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
