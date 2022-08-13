import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { toDosApi } from "./rtcApi";

import mainSlice from "./slices/mainSlice.js";

const rootReducer = combineReducers({
  main: mainSlice,
  [toDosApi.reducerPath]: toDosApi.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDosApi.middleware),
});
