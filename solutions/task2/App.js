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
      title: `TodoList`,
      headerRight: <Button title="+" onPress={() => navigation.navigate('AddTodo')}/>
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

class AddTodo extends React.Component {

  static navigationOptions = ({ navigation }) => {

    let addTodo;
    let todoName;
    let todoDetail;

    if(navigation.state.params){
      todoName = navigation.state.params.todoName
      todoDetail = navigation.state.params.todoDetail;

      if(navigation.state.params.addTodo){
        addTodo = navigation.state.params.addTodo;
      }
    }

    return({
      title: `Add new task`,
      headerRight: <Button title="Done" disabled={(!todoName || !todoDetail)} onPress={() =>
        addTodo({name: todoName, detail: todoDetail},
          navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home'})]
          }))
      )}/>
    })
  };

  constructor(props) {
    super(props);
    this.state = { name: '', detail:''};
  }

  componentDidMount(){
    this.props.navigation.setParams({addTodo:this.props.onAddTodo})
  }

  onChangeName(name){
    this.setState({name:name});
    this.props.navigation.setParams({todoName:name})
  }

  onChangeDetail(detail){
    this.setState({detail:detail});
    this.props.navigation.setParams({todoDetail:detail})
  }


  render(){
    return(
        <View style={{padding:10}}>
          <Text>Navn</Text>
          <TextInput
            underlineColorAndroid='transparent'
            style={{height: 30, borderColor: 'gray', borderWidth: 1, paddingLeft:5, paddingBottom: 0, paddingTop:0, marginBottom:10}}
            onChangeText={(name) => this.onChangeName(name)}
            value={this.state.name}
          />
          <Text>Beskrivelse</Text>
          <TextInput
            underlineColorAndroid='transparent'
            textAlignVertical={'top'}
            multiline={true}
            style={{height: 90, borderColor: 'gray', borderWidth: 1, paddingLeft:5, paddingBottom: 0, paddingTop:0}}
            onChangeText={(detail) => this.onChangeDetail(detail)}
            value={this.state.detail}
          />
        </View>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => {
      dispatch(addTodo(todo))
    }
  }
}

const TodoList = connect(
  mapStateToProps,
)(TodoListContainer)

const AddTodoConnect = connect(
  null,
  mapDispatchToProps
)(AddTodo)

const Navigation = StackNavigator({
  Home: { screen: TodoList},
  TodoDetail: { screen: TodoDetail},
  AddTodo: { screen: AddTodoConnect},
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
