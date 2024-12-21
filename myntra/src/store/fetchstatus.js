import { createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
  name : "fetchStatus" ,
  initialState : {
    fetchDone : false,
    cureentlyFetching : false,
  },
  reducers : {
    markFetchDone : (state) => {
       state.fetchDone = true;
    },
    markFetchingStart : (state) => {
       state.cureentlyFetching = true;
    },
    markFetchingFinish : (state) => {
       state.cureentlyFetching = false;
    },
  }
});


export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
