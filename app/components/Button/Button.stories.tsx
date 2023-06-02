import {ComponentMeta, ComponentStoryObj} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
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
      <View style={styles.containerStyle}>
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Button>;

export default ButtonMeta;

type ButtonStory = ComponentStoryObj<typeof Button>;

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
