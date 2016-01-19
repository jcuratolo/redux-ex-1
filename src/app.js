const Redux = require('redux');
import expect from 'expect';

function todoStore(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        state.completed = !state.completed;
      }
      return state;

    default:
      return state;
  }
}

function todosStore(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      });

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map(t => todoStore(t, action));

    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
}

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todosStore,
  visibilityFilter
});

function testAddTodo() {
  const stateBefore = [];
  const stateAfter = [{
    id: 0,
    text: 'A new todo',
    completed: false
  }];
  const action = {
    id: 0,
    text: 'A new todo',
    type: 'ADD_TODO'
  };

  expect(
    todosStore([],{})
  ).toEqual([], 'unknown actions should return the state unchanged');

  expect(
    todosStore(stateBefore, action)
  ).toEqual(stateAfter);
}

function testRemoveTodo() {
  const stateBefore = [{
    id: 0,
    text: 'A new todo',
    completed: false
  }];
  const stateAfter = [];
  const action = {
    type: 'REMOVE_TODO',
    id: 0
  };

  expect(
    todosStore(stateBefore, action)
  ).toEqual(stateAfter);
}

function testToggleTodo() {
  const stateBefore = [
    {
      id: 0,
      text: 'some text',
      completed: false
    },
    {
      id: 1,
      text: 'some other text',
      completed: false
    }
  ];
  const stateAfter = [
    {
      id: 0,
      text: 'some text',
      completed: false
    },
    {
      id: 1,
      text: 'some other text',
      completed: true
    }
  ];
  const action = {
    id: 1,
    type: 'TOGGLE_TODO'
  };

  expect(
    todosStore(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testRemoveTodo();
testToggleTodo();
console.log('====> tests passed.');
