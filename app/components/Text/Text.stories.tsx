import {ComponentMeta, ComponentStoryObj} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeProvider} from '../../theme/useTheme';
import Text from './';

const TextMeta = {
  title: 'Text',
  component: Text,
  argTypes: {},
  args: {
    children: 'The quick brown fox\n jumps over the lazy dog',
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
} as ComponentMeta<typeof Text>;

export default TextMeta;

type TextStory = ComponentStoryObj<typeof Text>;

// ----- Variations ----
// Basic
export const Basic: TextStory = {};

// TitleLarge
export const TitleLarge: TextStory = {
  args: {
    variant: 'titleLarge',
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
