import React, { Component, PropTypes } from 'react';

export default class TodoList extends Component {
  render() {
    console.log('todo list rendering');
    const { todos } = this.props;

    return (
      <div>
        <h1>todo list</h1>
        <ul>
          { todos.map(todo => <li key={ todo.id }>{ todo.text }</li>) }
        </ul>
      </div>
    )
  }
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
