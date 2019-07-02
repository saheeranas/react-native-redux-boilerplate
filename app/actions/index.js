export const DATA_AVAILABLE = "DATA_AVAILABLE";
//Import the sample data
import Data from "../sampledata.json";

export function getData() {
  return dispatch => {
    setTimeout(() => {
      const data = Data.faq;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 2000);
  };
}
