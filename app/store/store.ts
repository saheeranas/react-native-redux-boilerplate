import {configureStore} from '@reduxjs/toolkit';

// Slices
import tasksSlice from './tasksSlice';
import userSlice from './userSlice';
import dummyNetwokSlice from './dummyNetwork';

export const store = configureStore({
  reducer: {
    todos: tasksSlice,
    user: userSlice,
    dummyNetwork: dummyNetwokSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
