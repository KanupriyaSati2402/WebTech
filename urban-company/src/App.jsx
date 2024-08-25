import React from "react";
import Nav from "./Components/Nav";
import Service from "./Components/Service"
import Carousels from "./Components/Carousels"
import New from "./Components/New"
const App = () => {
  return (
    <section>
      <Nav />
      <Service />
      <Carousels/>
      <New />
    </section>
  );
};
export default App;
