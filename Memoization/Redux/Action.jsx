//we will create one intial state
let initialState = {
  count: 0,
};
//we will create one reducer function
let counter1Actions = (state = initialState, action) => {
  // we are storing the initial value inside the state
  switch (
    action.type //action will return an object inside which we have type
  ) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };

    default:
     return state;
  }
};
// above this we have our action function 

export default counter1Actions;