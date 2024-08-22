// import React from "react";

// const App=()=>{
//     return <React.Fragment>
//         <section></section>
//         <div></div>
//     </React.Fragment> // or empty tag
// }
// export default App;

// rules of jsx
// -- we cannot pass multiple react elements we have to wrap all the multiple elements inside a root element
//-- React element name should be in lower case
//--we have to close each tag in react , otherwise error (every tag should have a closing tag)

//-- if there are lakh of child inside the elements wrapping element till will take some time to load
// -- we can use fragment to wrap the elements so that it will not take time to load
//--fragements are used to avoid extra unwanted  node
//-- there are two ways to make fragements
//-- <React.Fragment></React.Fragment>
//-- <></>

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super(); // first statement should be super call statement
    // it is the best place to use state object
    // how to use , using this() -- this object ref to current obj
    this.state = {
      count: 0, // this is object that why key value pair
    };
  }
  //to use state we can only use inside constructor in cbc
  // if we using it outside that time it will not be the inbuilt feature beacuse inbuilt can be
  // accessed with this keyword
  // to update state object in cbc we have a inbuit function called setstate

  render() {
    return (
      <section>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 }); // to update values in the obj we have a in built method called setState
            // we have to use object as the value of state is obj
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 }); // to update values in the obj we have a in built method called setState
            // we have to use object as the value of state is obj
          }}
        >
          Dcrement
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 }); // to update values in the obj we have a in built method called setState
            // we have to use object as the value of state is obj
          }}
        >
          Reset
        </button>
      </section>
    );
  }
}

//StateObject
//-- state is an object in react which is used to contain some data
//-- state object is used for dynamic updation
//--these are inbuiltly present in cbc (fbc doesnot have)
//-- for dynamic updation which is not possible inside js we use state object in react
//-- whenever the state change it will re render the complete component
//because of this we can see dhynamic changes


