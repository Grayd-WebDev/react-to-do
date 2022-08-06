import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

export const addToDo = createAction("ADD_TODO");

export default createReducer(initialState, {
  [addToDo]: function (state) {
    state.toDos = state.toDos.push();
  },
});
