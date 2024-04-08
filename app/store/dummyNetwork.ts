import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import apiClient from '../services/api-client';

// Types
type User = {
  status: 'idle' | 'loading' | 'success' | 'failed';
  name: string;
  email: string;
};

type InitialState = {
  error: string | null | undefined;
  data: User;
  newUser: User;
};

// Initial State
const initialState: InitialState = {
  error: null,
  data: {
    status: 'idle',
    name: '',
    email: '',
  },
  newUser: {
    status: 'idle',
    name: '',
    email: '',
  },
};

// Async Thunks
export const fetchUser = createAsyncThunk('userDetails', async () => {
  const response = await apiClient.get(
    'https://jsonplaceholder.typicode.com/users/1',
  );
  return response;
});

export const createUser = createAsyncThunk(
  'users/new',
  async (payload: Omit<User, 'status'>) => {
    const response = await apiClient.post(
      'https://jsonplaceholder.typicode.com/users',
      payload,
    );
    return response;
  },
);

// Slice
const dummyNetwokSlice = createSlice({
  name: 'dummyNetworkSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // data - for GET example
      .addCase(fetchUser.pending, state => {
        state.data.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data.status = 'success';
        state.data.name = action.payload.data.name;
        state.data.email = action.payload.data.email;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.data.status = 'failed';
        state.error = action.error.message;
      })
      // newUser - POST example
      .addCase(createUser.pending, state => {
        state.newUser.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.newUser.status = 'success';
        state.newUser.name = action.payload.data.name;
        state.newUser.email = action.payload.data.email;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.newUser.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = dummyNetwokSlice.actions;

export default dummyNetwokSlice.reducer;
