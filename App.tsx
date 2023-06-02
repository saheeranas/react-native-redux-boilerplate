import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './app/store/store';
import {ThemeProvider} from './app/theme/useTheme';
import {NoInternetToast} from './app/components/NoInternet';

// Navigation
import RootNavigation from './app/routes/RootNavigation';

import StorybookUIRoot from './.storybook';

let Root = function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigation />
          <NoInternetToast />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

// change to true to use storybbok
let IS_STORYBOOK_ENABLED = true;

if (IS_STORYBOOK_ENABLED) {
  Root = StorybookUIRoot;
}

export default Root;
