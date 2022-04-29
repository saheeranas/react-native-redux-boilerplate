import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../theme/useTheme';

import {LayoutPropsType} from '../types/components';
import {ThemeContextInterface} from '../theme/useTheme';

const Layout = ({children, style}: LayoutPropsType) => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();
  return (
    <View style={[styles.layout, {backgroundColor: theme?.layoutBg}, style]}>
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
