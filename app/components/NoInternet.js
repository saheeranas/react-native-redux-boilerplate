/**
 * TODO: Need to wire with netinfo library to automatically show messages.
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '../theme/useTheme';
import Layout from './Layout';

const NoInternet = () => {
  const {theme} = useTheme();
  return (
    <Layout style={styles.layout}>
      <View style={styles.content}>
        <Text style={{color: theme.color, marginBottom: 10}}>No Internet</Text>
        <Text style={{color: theme.color}}>Please check your connection</Text>
      </View>
    </Layout>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
});
