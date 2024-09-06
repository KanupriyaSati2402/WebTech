import React from "react";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* // this will only be there for the wrapper element */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Login />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/contact" element={<Contact />} />
            <Route path="/home/register" element={<Register />} />
          </Route>

          <Route path="/product" element={<Product />}>
            <Route path="/product/product1" element={<Product1 />} />
            <Route path="/product/product2" element={<Product2 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//-- we need to give same path as parent to the child which have to be by defaultly shown as we click 