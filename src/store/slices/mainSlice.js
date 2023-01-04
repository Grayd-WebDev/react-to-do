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
      state.toDos = state.toDos.filter((i) => i._id !== action.payload);
    },
    checkToDo(state, action) {
      state.toDos = state.toDos.map((i) => {
        if(i._id == action.payload)
          return {...i, isComplete: !i.isComplete};
        else
          return i;
      });
    },
  },
});

export default mainSlice.reducer;
export const { addToDo, removeToDo, checkToDo } = mainSlice.actions;
