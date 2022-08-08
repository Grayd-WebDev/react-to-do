import { configureStore, combineReducers } from "@reduxjs/toolkit";

import mainSlice from "./slices/mainSlice.js";

const rootReducer = combineReducers({
  main: mainSlice,
});

export default configureStore({
  reducer: rootReducer,
});
