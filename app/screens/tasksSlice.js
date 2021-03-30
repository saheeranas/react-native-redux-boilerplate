import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  entities: [
    {
      id: '1',
      title: 'Task 1',
      done: false,
    },
    {
      id: '2',
      title: 'Task 2',
      done: false,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.entities.push(todo);
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities.find(e => e.id === todoId);
      todo.done = !todo.done;
    },
    completedTodosCleared(state, action) {
      state.entities = state.entities.filter(todo => !todo.done);
    },
  },
});

export const {
  todoAdded,
  todoToggled,
  completedTodosCleared,
} = todosSlice.actions;

export default todosSlice.reducer;
