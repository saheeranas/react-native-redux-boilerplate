import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';

// import Demo from './app/screens/Demo';
// import Login from './app/screens/auth/Login';
// import Tasks from './app/screens/Tasks';
// import Settings from './app/screens/Settings';
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
          {/* <NotFound /> */}
          {/* <NoInternet /> */}
          {/* <Login /> */}
          {/* <Tasks /> */}
          {/* <Settings /> */}
        </ThemeProvider>
      </Provider>
    );
  }
}

// For Toast, Use
// https://github.com/arnnis/react-native-toast-notifications
