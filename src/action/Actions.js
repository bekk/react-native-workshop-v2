import Constants from '../constants/Constants';

export const addTodo = (todo) => {
  return{
      type: Constants.ADD_TODO,
      todo
  }
}
