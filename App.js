import React, {Component} from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './app/store/store'; //Import the store

// Import the listing screen component which is a Class Component
import TasksClass from './app/screens/TasksClass';
// Same component which is a Function Component
import TasksFunc from './app/screens/TasksFunc'; //Import the Function component

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <TasksClass /> */}
          <TasksFunc />
        </PersistGate>
      </Provider>
    );
  }
}
