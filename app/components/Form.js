import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {useTheme} from '../theme/useTheme';
import {spacing, typeSizes} from '../theme/theme';

const Input = props => {
  const {theme} = useTheme();
  return (
    <View style={styles.inputWrp}>
      <TextInput
        style={[styles.input, {color: theme.textColor}, {...props.style}]}
        {...props}
      />
      {props.error ? (
        <Text style={[styles.error, {color: theme.error}]}>{props.error}</Text>
      ) : null}
    </View>
  );
};

export {Input};

const styles = StyleSheet.create({
  inputWrp: {
    marginBottom: spacing.cardMarginB,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: spacing.borderRadius,
  },
  error: {
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
});
