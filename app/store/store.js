import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Persist
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import reducers from './reducers/index'; //Import the reducer

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), thunk),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
