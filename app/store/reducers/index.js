import { combineReducers } from "redux";

import { DATA_AVAILABLE, ADD_DATA, MARK_DONE } from "../actions/"; //Import the actions types constant we defined in our actions

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    case ADD_DATA: 
      state = Object.assign(
        {},
        state,
        { 
          data: [...state.data, {
            id: state.data[state.data.length - 1].id + 1,
            task: action.data.task,
            done: false
          }] 
        }
      );
      return state; 
    case MARK_DONE: 
      state = Object.assign(
        {},
        state,
        { 
          data: state.data.map(item => item.id === action.id ? 
            { ...item, done: true } :
            item
          )
        }
      );
      return state; 
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
