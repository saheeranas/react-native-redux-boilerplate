export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const ADD_DATA = "ADD_DATA";
export const MARK_DONE = "MARK_DONE";

//Import the sample data
import Data from "../sampledata.json";

export function getData() { 
  return dispatch => {
    setTimeout(() => {
      const data = Data.tasks;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 2000);
  };
}

export function addData(data) { 
  return dispatch => { 
    setTimeout(() => {
      dispatch({ type: ADD_DATA, data: data }); 
    }, 2000);
  };
}

export function markAsDone(id) { 
  return dispatch => { 
    setTimeout(() => {
      dispatch({ type: MARK_DONE, id }); 
    }, 50);
  };
}