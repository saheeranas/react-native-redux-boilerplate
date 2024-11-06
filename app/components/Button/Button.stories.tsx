import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeProvider} from '../../theme/useTheme';
import {Button} from './Button';

const ButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <ThemeProvider>
        <View style={styles.containerStyle}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default ButtonMeta;

type ButtonStory = StoryObj<typeof ButtonMeta>;

// ----- Variations ----
// Basic
export const Basic: ButtonStory = {};

// Another
export const Another: ButtonStory = {
  args: {
    text: 'Press me!',
  },
};

// Styles
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
