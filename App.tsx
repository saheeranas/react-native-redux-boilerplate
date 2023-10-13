import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ReduxProvider from './app/store';
import {STORYBOOK_MODE} from '@env';
import {ThemeProvider} from './app/theme/useTheme';
import {NoInternetToast} from './app/components/NoInternet';

// Navigation
import RootNavigation from './app/routes/RootNavigation';

import StorybookUIRoot from './.storybook';

let Root = function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <ThemeProvider>
          <RootNavigation />
          <NoInternetToast />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

// Render StoryBook if the ENV variable set to 'TRUE', type is <string> not <boolean>
if (STORYBOOK_MODE === 'TRUE') {
  Root = StorybookUIRoot;
}

export default Root;
