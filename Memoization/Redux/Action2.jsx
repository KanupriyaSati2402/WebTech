let initialState2 = {
  age: 20,
  name:""
};
let AgeCounter = (state = initialState2, action) => {
    switch (
        action.type //action will return an object inside which we have type
      ) {
        case "Ageincrement":
          return { age: state.age + 1,name:action.payload };
        case "decrement":
          return { age: state.age - 1 };
        case "reset":
          return { age: 0 };
    
        default:
         return state
      }
};
export default AgeCounter;