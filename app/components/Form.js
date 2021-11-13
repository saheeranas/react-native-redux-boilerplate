import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {useTheme} from '../theme/useTheme';
import {spacing, typeSizes} from '../theme/theme';

const Input = props => {
  const {theme} = useTheme();
  return (
    <View style={styles.inputWrp}>
      <TextInput
        {...props}
        style={[
          styles.input,
          {color: theme.textColor, borderColor: theme.layoutBg},
          {...props.style},
        ]}
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
    borderColor: '#000000',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: spacing.borderRadius,
  },
  error: {
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
});
