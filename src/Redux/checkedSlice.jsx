import { createSlice } from "@reduxjs/toolkit";



export const checkedSlice=createSlice({
  name:"check",
  initialState:{check:"All",edit:""},
  reducers:{
    checked(state,action){
      return {...state,check:action.payload}
  },
  edit(state,action){
    return {...state,edit:action.payload}
},
saveEdit(state,action){
  return {...state,edit:""}
},

  },


})

const {actions, reducer } = checkedSlice;
    export const {checked,edit,saveEdit} = checkedSlice.actions;
    export default checkedSlice.reducer;