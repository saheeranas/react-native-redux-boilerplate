import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import {NoInternetToast} from './app/components/NoInternet';

// Navigation
import RootNavigation from './app/routes/RootNavigation';

import {API_URL} from 'react-native-dotenv';

export default class App extends Component {
  render() {
    console.log(API_URL);
    return (
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigation />
          <NoInternetToast />
        </ThemeProvider>
      </Provider>
    );
  }
}
