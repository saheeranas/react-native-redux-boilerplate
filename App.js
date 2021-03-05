import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/store'; //Import the store

// Import the listing screen component
import Tasks from './app/screens/Tasks';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tasks />
      </Provider>
    );
  }
}
