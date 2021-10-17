import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch} from 'react-redux';
import {
  todoAdded,
  todoToggled,
  completedTodosCleared,
} from '../store/tasksSlice';

import {useTheme} from '../theme/useTheme';
import Layout from '../components/Layout';
import Card from '../components/Card';

const tickIcon = <Icon name="checkbox-outline" size={20} color="red" />;

const Tasks = props => {
  const {theme} = useTheme();

  const todoList = useSelector(state => state.todos.entities);
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const addNewTask = () => {
    let temp = text.trim();
    if (temp !== '')
      dispatch(todoAdded({id: Date.now(), title: temp, done: false}));
    setText('');
  };

  return (
    <Layout>
      {/* Tasks Listing starts here */}
      <FlatList
        data={todoList}
        renderItem={({item, index}) => (
          <ListItem
            item={item}
            index={index}
            onPress={() => dispatch(todoToggled(item.id))}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.flatList}
      />
      {/* Tasks Listing ends here */}

      <Card style={[styles.inputCard, {borderTopColor: theme.layoutBg}]}>
        {/* TextInput and InputButton starts here */}
        <View style={styles.inputBtnWrapper}>
          <TextInput
            value={text}
            placeholder="New Task"
            placeholderTextColor={theme.color}
            style={[
              styles.input,
              {color: theme.color, backgroundColor: theme.layoutBg},
            ]}
            onChangeText={text => setText(text)}
          />
          <Pressable onPress={() => addNewTask()} style={styles.btnAdd}>
            <Text style={styles.btnAddText}>ADD</Text>
          </Pressable>
        </View>
        {/* TextInput and InputButton ends here */}

        <Pressable
          style={({pressed}) => [
            styles.btnClear,
            {backgroundColor: pressed ? '#c50e29' : 'transparent'},
          ]}
          // style={styles.btnClear}
          onPress={() => dispatch(completedTodosCleared())}>
          {({pressed}) => (
            <Text
              style={[
                styles.btnClearText,
                {color: pressed ? '#fff' : '#c50e29'},
              ]}>
              Clear completed
            </Text>
          )}
        </Pressable>
      </Card>
    </Layout>
  );
};

// List Item component
export const ListItem = ({item, index, onPress}) => {
  const {theme} = useTheme();
  return (
    <Card style={{marginBottom: 10}}>
      <Pressable
        style={[styles.row, {opacity: item.done ? 0.8 : 1}]}
        onPress={() => onPress()}>
        <Text
          style={[
            styles.title,
            {
              color: theme.color,
              textDecorationLine: item.done ? 'line-through' : 'none',
            },
          ]}>
          {item.title}
        </Text>
        <Icon
          name="checkbox-outline"
          size={20}
          color={item.done ? '#00d258' : 'gray'}
        />
      </Pressable>
    </Card>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4d505b',
  },

  tickIcon: {
    width: 22,
    height: 22,
  },

  inputCard: {
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  inputBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    flex: 0.72,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 38,
    backgroundColor: '#f6f6f6',
  },

  btnAdd: {
    borderRadius: 20,
    padding: 6,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0071ff',
    color: '#fff',
  },

  btnAddText: {
    color: '#fff',
    fontSize: 14,
  },

  btnClear: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c50e29',
  },

  btnClearText: {
    color: '#c50e29',
    fontSize: 14,
  },
});
