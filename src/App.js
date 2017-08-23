import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import TodoReducer from './reducers/TodoReducer';
import TodoList from './components/TodoList.js';

import {
  AppRegistry,
} from 'react-native';


let todoStore = createStore(TodoReducer)

const Navigation = StackNavigator({
  Home: { screen: TodoList }
});

class Main extends React.Component {
  render(){
    return(
      <Provider store={todoStore}>
        <Navigation/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeWorkshop', () => Main);
