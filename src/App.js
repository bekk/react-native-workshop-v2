import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'

import Start from './Start';
import startReducer from './reducers/start-reducer';

const todoApp = combineReducers({
  start: startReducer
});

const store = createStore(todoApp);

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Start />
      </Provider>
    );
  }
}

export default App;
