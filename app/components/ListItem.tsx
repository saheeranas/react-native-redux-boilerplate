import * as React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme, ThemeContextInterface} from '../theme/useTheme';
import Card from './Card';
import Text from './Text';

interface TaskItemType {
  id: string;
  title: string;
  done: boolean;
}

interface ListItemType {
  item: TaskItemType;
  index?: number;
  onPress: (arg0: string) => void;
}

const ListItem = ({item, onPress}: ListItemType): JSX.Element => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();

  return (
    <Card style={styles.card}>
      <Pressable
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.row, {opacity: item.done ? 0.3 : 1}]}
        accessibilityLabel={
          item.done ? 'Tap to uncheck from list' : 'Tap to check from list'
        }
        accessibilityHint="Toggles task done and undone"
        accessibilityRole="radio"
        accessibilityState={{checked: item.done}}
        onPress={() => onPress(item.id)}>
        <Text
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              color: theme?.color,
              textDecorationLine: item.done ? 'line-through' : 'none',
            },
          ]}>
          {item.title}
        </Text>
        <Icon
          name="checkbox"
          size={20}
          color={item.done ? theme.primary : '#CECECE'}
        />
      </Pressable>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
});
