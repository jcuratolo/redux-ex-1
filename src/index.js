import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import todoApp from './todoApp.js';

let store = todoApp;
let rootElement = document.getElementById('app');

render(
    <App />,
  rootElement
);
