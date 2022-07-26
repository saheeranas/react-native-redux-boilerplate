import {createSlice} from '@reduxjs/toolkit';

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: Task[];
};

const initialState: InitialState = {
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

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    taskAdded(state, action) {
      const todo = action.payload;
      state.entities.push(todo);
    },
    taskToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities.find(e => e.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    completedTasksCleared(state) {
      state.entities = state.entities.filter(todo => !todo.done);
    },
  },
});

export const {taskAdded, taskToggled, completedTasksCleared} =
  tasksSlice.actions;

export default tasksSlice.reducer;
