import { createSlice } from "@reduxjs/toolkit";



export const todoSlice=createSlice({
  name:"todo",
  initialState:[

],
  reducers:{
    remove(state,action){return state.filter((item)=>item.id!==action.payload)},
    addTodo(state,action){
      return [...state,action.payload] ;
    },
    check(state,action){return state.map((item)=>{
      console.log(action);
      if(item.id==action.payload.id){
        return {...item,check:action.payload.check}
      }
    return item
    
    
    })},
    saveEdit1(state,action){
      return state.map((item,index)=>
      {if(item.id==action.payload.id){
        console.log("If");
        return {...item,todo:action.payload.todo}
      }else{
console.log("else");
        return {...item}

      }
     

      
      
     } )
    },

  },


})

const {actions, reducer } = todoSlice;
    export const {remove,addTodo ,check,saveEdit1} = todoSlice.actions;
    export default todoSlice.reducer;