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
      state.toDos.splice(
        state.toDos.findIndex((i) => i.id === action.payload),
        1
      );
    },
  },
});

export default mainSlice.reducer;
export const { addToDo, removeToDo } = mainSlice.actions;
