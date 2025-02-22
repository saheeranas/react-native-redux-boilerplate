import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ReduxProvider from './app/store';
import {ThemeProvider} from './app/theme/useTheme';
// import {NoInternetToast} from './app/components/NoInternet';

// Navigation
import RootNavigation from './app/routes/RootNavigation';

let Root = function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <ThemeProvider>
          <RootNavigation />
          {/* <NoInternetToast /> */}
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default Root;
