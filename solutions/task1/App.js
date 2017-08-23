import React from 'react';
import { createStore } from 'redux'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { NavigationActions } from 'react-navigation'


import TodoReducer from '../../src/reducers/TodoReducer';
import {addTodo} from '../../src/action/Actions';

import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
  FlatList,
  TextInput
} from 'react-native';

let todoStore = createStore(TodoReducer)

class TodoListContainer extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return({
      title: `TodoList`
      }
    )
  };

  renderRow = ({item}) => {
    const { navigate } = this.props.navigation;
    return(
        <Button
          onPress={() => navigate('TodoDetail', { todo: item })}
          title={item.name}
        />
    )
  }

  keyByIndex = (item, index) => {
    return index;
  }

  render() {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this.renderRow}
        keyExtractor={this.keyByIndex}
        removeClippedSubviews={false}
      />
    );
  }
}

class TodoDetail extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const {todo} =  navigation.state.params
    return({
      title: todo.name,
    })
  };

  render(){
    const {todo} = this.props.navigation.state.params;
    return(
      <Text style={{padding:10}}>{todo.detail}</Text>
    );
  }
}


const mapStateToProps = (state,props) => {
  return {
    todos: state.todos
  }
}

const TodoList = connect(
  mapStateToProps,
)(TodoListContainer)

const Navigation = StackNavigator({
  Home: { screen: TodoList},
  TodoDetail: { screen: TodoDetail}
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
