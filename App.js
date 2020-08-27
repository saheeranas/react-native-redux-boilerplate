import React, {Component} from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './app/store/store'; //Import the store
import Home from './app/screens/home'; //Import the component file

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
