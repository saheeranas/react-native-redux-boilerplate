export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const ADD_DATA = 'ADD_DATA';
export const MARK_DONE = 'MARK_DONE';

//Import the sample data
import Data from '../sampledata.json';

export function getData() {
  return (dispatch) => {
    const data = Data.tasks;
    dispatch({type: DATA_AVAILABLE, data: data});
  };
}

export function addData(data) {
  return (dispatch) => {
    dispatch({type: ADD_DATA, data: data});
  };
}

export function markAsDone(id) {
  return (dispatch) => {
    dispatch({type: MARK_DONE, id});
  };
}
