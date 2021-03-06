import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux" 
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { reducer } from './reducer' 
import './index.css';

let store = createStore(reducer, applyMiddleware(thunk)) 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      {/* <App /> */}
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
