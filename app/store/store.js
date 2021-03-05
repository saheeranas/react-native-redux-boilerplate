import {configureStore} from '@reduxjs/toolkit';

// Slices
import tasksSlice from '../screens/tasksSlice';

export const store = configureStore({
  reducer: {
    todos: tasksSlice,
  },
});
