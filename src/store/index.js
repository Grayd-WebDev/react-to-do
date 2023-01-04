import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { toDosApi } from "./rtcApi";
import authSlice from "./slices/authSlice";
import mainSlice from "./slices/mainSlice";

const rootReducer = combineReducers({
  main: mainSlice,
  auth: authSlice,
  [toDosApi.reducerPath]: toDosApi.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(toDosApi.middleware),
});


// Read an article about serializableCheck: false !!!!!!!!!!!!!!