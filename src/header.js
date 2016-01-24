import React, { Component } from 'react';
import TodoApp from './todoApp.js';

export default class Header extends Component {
  addTodo() {
    console.log(this.input.value);
    this.props.onAddOne(this.input.value);
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
