import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useTheme} from '../theme/useTheme';

const Layout = ({children}) => {
  const {theme} = useTheme();
  return (
    <View style={[styles.layout, {backgroundColor: theme.layoutBg}]}>
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
