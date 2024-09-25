import { configureStore } from "@reduxjs/toolkit";
import Counter  from './CounterSlice1'
import Counter2 from "./CounterSlice2"


let store1 =configureStore({
    reducer:{
      counter1:Counter, // when we are passing more than one then we can pass inside an object in key value pair 
       counter2: Counter2,
    }
});

export default store1;