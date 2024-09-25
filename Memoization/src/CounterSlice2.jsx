import {createSlice} from "@reduxjs/toolkit"
let initialState={
    count:0
}
let counterSlice2 =createSlice({
    name:"counterSlice2",
    initialState,
    reducers:{
        increment2:(state)=>{
            return {count:state.count+1};
        },
        decrement2:(state)=>{
            return {count:state.count-1};
        }
    },
});

export let {increment2 , decrement2 } = counterSlice2.actions; 
export default counterSlice2.reducer;


// if we want to fetch data and we know that fetching data is async , for this in redux toolkit we 
// have a library thunk 
// because of this we can perform async operations 
// we have a method to create thunk createasyncthunk and it will take 2 parameters , 
// 1 st is actiontype  and 2nd is the callback function inside which we aync logic to fetch the data 
// actiontype should be prefixed with slice name 

//actions of thunk we cannot pass inside reducer so we
// have a key names extrareducers this key will accept one function and there we need to pass one 
// parameter name is builder , the fetchdata function will return one promise which will be 
// passed to builder with the addCase , promise have 3 state (pending , reject , fulfilled)
// addcase will accept 2 parameters , first one action creator and 2nd one is callback function that 
// callback function will accept two parameter state and action 