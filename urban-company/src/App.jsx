import React from "react";
import Nav from "./Components/Nav";
import Service from "./Components/Service"
import Carousels from "./Components/Carousels"
import New from "./Components/New"
import Salon from "./Components/Salon"

const App = () => {
  return (
    <section>
      <Nav />
      <Service />
      <Carousels/>
      <New />
      <Salon />
    </section>
  );
};
export default App;
