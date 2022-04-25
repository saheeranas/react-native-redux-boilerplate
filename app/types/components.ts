import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

// Layout
export interface LayoutPropsType {
  children: ReactNode;
  style?: ViewStyle;
}

// MenuItem
export interface MenuItemPropsType {
  label: string;
  rightItem?: ReactNode;
  onPress: () => void;
}
