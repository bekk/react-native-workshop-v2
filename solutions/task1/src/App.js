import React, { Component } from 'react';
import RuterMap from './components/RuterMap';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { Provider } from 'react-redux';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = storeWithMiddleware(reducer);

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <RuterMap/>
      </Provider>
    )
  }
}
