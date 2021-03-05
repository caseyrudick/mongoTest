import React from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App';
// react-redux provides communication between react & redux store 
// react listens to changes in store and rerenders
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux';
// redux-thunk provides the middleware actioncreators to 
// return a function instead of an action, think async actions 
import reduxThunk from "redux-thunk"
// establishes ingress for redux store 
import reducers from "./Reducers"


// devTools to view store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)
ReactDOM.render(
  <Provider store={store}>
    <App/>  
  </Provider>,
  document.getElementById('root')
);

