import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import {NoInternetToast} from './app/components/NoInternet';

// import Demo from './app/screens/Demo';
// import NoInternet from './app/components/NoInternet';
// import NotFound from './app/components/NotFound';

import RootNavigation from './app/routes/RootNavigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          {/* <Demo /> */}
          <RootNavigation />
          <NoInternetToast />
        </ThemeProvider>
      </Provider>
    );
  }
}
