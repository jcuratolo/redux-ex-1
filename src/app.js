import React, { Component } from 'react';
import store from './todoApp.js';

import Header from './header.js';
import TodoList from './todoList.js';
import Footer from './footer.js';

var appContext;

export default class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    appContext = this;
    store.subscribe(this.update.bind(this));
  }

  update() {
    console.log('omg brittany im totally updating right now');
    this.setState(store.getState());
  }

  addOne(inputValue) {
    store.dispatch({
        type: 'ADD_TODO',
        text: inputValue
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header onAddOne={ this.addOne.bind(this) }/>
        <TodoList todos={ todos }/>
        <Footer />
      </div>
    );
  }
};
