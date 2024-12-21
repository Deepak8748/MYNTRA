import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./items";
import fetchStatusSlice from "./fetchstatus";
import bagSlice from "./bagslice";



const myntrastore = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
    bag : bagSlice.reducer,
  }
});

export default myntrastore;