import React from 'react';
import { createStore } from 'redux'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import {
  Text,
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';


class TodoListContainer extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return({
      title: `TodoList`,
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

const mapStateToProps = (state,props) => {
  return {
    todos: state.todos
  }
}

const TodoList = connect(
  mapStateToProps,
)(TodoListContainer)

export default TodoList;
