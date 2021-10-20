import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../theme/useTheme';
import Layout from './Layout';

const NotFound = ({
  title = 'Not Found',
  message = 'There is nothing to show',
}) => {
  const {theme} = useTheme();
  return (
    <Layout style={styles.layout}>
      <View style={styles.content}>
        <Text style={{color: theme.color, marginBottom: 10}}>{title}</Text>
        <Text style={{color: theme.color}}>{message}</Text>
      </View>
    </Layout>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
});
