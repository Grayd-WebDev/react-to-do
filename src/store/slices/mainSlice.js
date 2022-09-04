import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    toDos: [],
  },
  reducers: {
    addToDo(state, action) {
      state.toDos.push(action.payload);
    },
    removeToDo(state, action) {
      state.toDos = state.toDos.filter((i) => i.id !== action.payload);
    },
    checkToDo(state, action) {
      state.toDos = state.toDos.filter((i) => i.id !== action.payload);
    },
  },
});

export default mainSlice.reducer;
export const { addToDo, removeToDo, checkToDo } = mainSlice.actions;
