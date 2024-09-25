import {configureStore} from "@reduxjs/toolkit"
import counter1 from './CounterSlice';
// for export default we can pass any name for here we are using the name counter1
// to make store inside redux toolkit we need to create a store we have a method called 
// configurestore 

let store = configureStore({
 reducer: counter1,  // this reducer is mandatory key we need to pass this for the data 
   
})
export default store;

// inside this we will pass reducer for each state it will be different as key then a object as its value 
// the key name will be reducer and if there are multiple that we will pass inside a object cd  