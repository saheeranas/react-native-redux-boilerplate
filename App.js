import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';

import Tasks from './app/screens/Tasks';
import Login from './app/screens/auth/Login';
import Demo from './app/screens/Demo';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          {/* <Tasks /> */}
          {/* <Login /> */}
          <Demo />
        </ThemeProvider>
      </Provider>
    );
  }
}

// For Toast, Use
// https://github.com/arnnis/react-native-toast-notifications
