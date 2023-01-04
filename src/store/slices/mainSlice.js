import { createSlice } from "@reduxjs/toolkit";
import { logoutUser, loginUser } from "../actionCreators";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    toDos: [],
    didLogout: false,
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
  extraReducers:{
    [logoutUser.fulfilled.type]:(state,action)=>{
      state.didLogout = true;
    },
    [loginUser.fulfilled.type]:(state,action)=>{
      state.didLogout = false;
    },
  }
});

export default mainSlice.reducer;
export const { addToDo, removeToDo, checkToDo } = mainSlice.actions;
