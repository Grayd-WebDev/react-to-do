import { configureStore, combineReducers } from "@reduxjs/toolkit";

import mainReducer from "./reducers/mainReducer.js";

const rootReducer = combineReducers({
  main: mainReducer,
});

export default configureStore({
  reducer: rootReducer,
});