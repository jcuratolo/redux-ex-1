import React, { Component } from 'react';
import TodoApp from './todoApp.js';

export default class Header extends Component {
  addTodo() {
    this.props.onAddTodo(this.input.value);
  }
  render() {
    console.log('header rendering');
    return (
      <div>
        <input type="text" ref={ node => this.input = node } />
        <button onClick={this.addTodo.bind(this)}>Add One</button>
      </div>
    )
  }
}
