import Constants from '../constants/Constants';

function initState(){
  return {todos:[
      {name:'Ferie', detail: 'Kjøp flybillett til Malaga og bestill hotell'},
      {name:'Ting til ferien', detail: 'Kjøp solkrem'}
    ]};
}

function todoReducer(state = initState(), action){
  switch(action.type){
    case Constants.ADD_TODO: {
      let nextState = Object.assign({}, state,
          {
            todos: state.todos
          })
      nextState.todos.push(action.todo);
      return nextState;
    }
    default:
      return state;
  }
}

export default todoReducer;
