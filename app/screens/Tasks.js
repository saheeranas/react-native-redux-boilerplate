import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  todoAdded,
  todoToggled,
  completedTodosCleared,
} from '../store/tasksSlice';

const Tasks = props => {
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
    <View style={{flex: 0.95, backgroundColor: '#ffffff', paddingTop: 20}}>
      {/* Tasks Listing starts here */}
      <FlatList
        data={todoList}
        renderItem={({item, index}) => (
          <Card
            item={item}
            index={index}
            onPress={() => dispatch(todoToggled(item.id))}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
      {/* Tasks Listing ends here */}

      <Pressable
        style={styles.btnClear}
        onPress={() => dispatch(completedTodosCleared())}>
        <Text style={styles.btnAddText}>Clear Completed</Text>
      </Pressable>

      {/* TextInput and InputButton starts here */}
      <View style={styles.inputBtnWrapper}>
        <TextInput
          value={text}
          placeholder="New Task"
          style={styles.input}
          onChangeText={text => setText(text)}
        />
        <Pressable onPress={() => addNewTask()} style={styles.btnAdd}>
          <Text style={styles.btnAddText}>ADD</Text>
        </Pressable>
      </View>
      {/* TextInput and InputButton ends here */}
    </View>
  );
};

// List Item component
export const Card = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.row, {opacity: item.done ? 0.8 : 1}]}
      onPress={() => onPress()}>
      <Text
        style={[
          styles.title,
          {textDecorationLine: item.done ? 'line-through' : 'none'},
        ]}>
        {item.title}
      </Text>
      <Image
        source={require('../assets/images/tick.png')}
        style={[styles.tickIcon, {tintColor: item.done ? '#00d258' : 'gray'}]}
      />
    </TouchableOpacity>
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

  row: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4d505b',
  },

  tickIcon: {
    width: 22,
    height: 22,
  },

  inputBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 0.72,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },

  btnAdd: {
    borderRadius: 5,
    padding: 6,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5855d6',
    color: '#fff',
    fontSize: 18,
  },

  btnAddText: {
    color: '#fff',
  },

  btnClear: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff2c55',
    color: '#fff',
    fontSize: 18,
  },
});
