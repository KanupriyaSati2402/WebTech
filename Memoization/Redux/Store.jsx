import {combineReducers, createStore} from 'redux';
import counter1Actions from './Action';
import AgeCounter from './Action2';
// in react to create store we have a method named createstore 

// to combine two reducer function
let rootReducer=combineReducers({
    counter1:counter1Actions,
    agecal:AgeCounter
})
let store =createStore(rootReducer);// now from this component we will export the store 
export default store;
//the combine reducer will combine two or more reducers and will return one rootreducer 