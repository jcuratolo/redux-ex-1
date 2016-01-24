import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
  todos: [],
};

let nextTodoId = -1;

function todosApp(state, action) {
  state = state || initialState;
  switch (action.type) {
    case 'ADD_TODO':
    console.log(state);
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: nextTodoId++,
          text: action.text,
          completed: false
        })
      });
    default:
      return state;
  }
}

export default createStore(todosApp);
