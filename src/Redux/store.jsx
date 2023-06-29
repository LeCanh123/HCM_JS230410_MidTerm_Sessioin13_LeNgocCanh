import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./todoSlice";
import  checkedSlice  from "./checkedSlice";

export  const store= configureStore({
    reducer:{
        todo:todoSlice,
        check:checkedSlice,
    }
})