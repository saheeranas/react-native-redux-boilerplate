import {configureStore} from '@reduxjs/toolkit';

// Slices
import tasksSlice from './tasksSlice';

export const store = configureStore({
  reducer: {
    todos: tasksSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false}),
});
