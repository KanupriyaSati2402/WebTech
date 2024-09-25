import {createSlice} from "@reduxjs/toolkit"
let initialState={
    count:0
}
let counterSlice =createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
        increment:(state)=>{
            return {count:state.count+1};
        },
        decrement:(state)=>{
            return {count:state.count-1};
        },
    },
});
// This slice will return 2 values actions and reducer 
export let {increment , decrement } = counterSlice.actions; // actions are different
export default counterSlice.reducer; // this reducer is a function  it have data 
// let counterSlice2=createSlice({
//     name:"counterSlice2",
//     initialState,
//     reducers:{
//         increment1:(state)=>{
//             return {count:state.count+1};
//         },
//         decrement1:(state)=>{
//             return {count:state.count-1};
//         },
//     },
// });

// export let {increment1 , decrement1 } = counterSlice2.actions;
// export let data2 =counterSlice2.reducer;


// for every slice created new component 
// like in reducers we will be creating actions in another compoent in this we will be using 
// createslice method that will take an {} inside which the first key to be passed will be the 
// name and then the initial state we have created , initialstate for each slice would be diff
// after this we will be creating an reducers inside which we will give the key of the action we 
// need to perform and then we will pass a function as as value and inside that we will 
// pass 2 parameters first one is state and the another one is action 
// but we will pass the action only when we need to give action to the action we are creating 
// then we will export the action from the slice we have created by using var name and 
// actions
// and store the data inside a var from the reducer 