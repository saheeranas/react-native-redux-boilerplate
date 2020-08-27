import {combineReducers} from 'redux';

import {DATA_AVAILABLE, ADD_DATA, MARK_DONE, CLEAR_ALL} from '../actions/'; //Import the actions types constant we defined in our actions

let dataState = {data: [], loading: true};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case ADD_DATA:
      state = Object.assign({}, state, {
        data: [
          ...state.data,
          {
            id: Date.now(),
            task: action.data.task,
            done: false,
          },
        ],
      });
      return state;
    case MARK_DONE:
      state = Object.assign({}, state, {
        data: state.data.map((item) =>
          item.id === action.id ? {...item, done: true} : item,
        ),
      });
      return state;
    case CLEAR_ALL:
      state = Object.assign({}, state, {data: []});
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
