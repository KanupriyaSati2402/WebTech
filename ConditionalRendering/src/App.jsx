import React from "react";
// import Weather from "./Weather";
import { Toaster } from "react-hot-toast";
// import Age from "./Age"
// import Life from "./Life"
import Login from './Login';
// import HomePage from './HomePage';


const App = () => {
  return (
    <section>
      <Toaster position="bottom-left" reverseOrder={false}></Toaster>
      {/* <Weather /> */}
      {/* <Age /> */}
      {/* <Life /> */}
      <Login/>
      {/* <HomePage /> */}
    </section>
  );
};

export default App;
