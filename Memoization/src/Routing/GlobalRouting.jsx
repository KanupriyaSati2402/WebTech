import React, { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import HouseHold from "../Product/HouseHold";
import Electronics from "../Product/Electronics";
import Layout from "./../components/Layout";
import Landing from "../components/Landing";
import Home from "../components/Home";
import Beauty from "./../Product/Beauty";
import Medical from "./../Product/Medical";
import RegisterPage from "./../Pages/RegisterPage";
import LoginPage from "./../Pages/LoginPage";
import About from "../Pages/About";
import Contact from "./../Pages/Contact";
import axios from "axios";
import PageNotFound from "../components/PageNotFound";
import AxiosInstance from "../axiosInstance/AxiosInstance";
import Payment from "../components/Payment";
import { globalVar } from "../Context/GlobalContext";
import Clothing from './../Product/Clothing';


export let projectRouting = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          
          {
            path: "/home/household",
            element: <HouseHold />,
          },
          {
            path: "/home/electrical",
            element: <Electronics />,
            loader: async () => {
              let { data } = await axios.get("http://localhost:5000/electrical");
              return data;
            },
          },
          {
            path: "/home/beauty",
            element: <Beauty />,
            loader: async () => {
              let { data } = await axios.get("http://localhost:5000/beauty");
              return data;
            },
          },
          {
            path: "/home/medical",
            element: <Medical />,
            loader: async () => {
              let { data } = await axios.get("http://localhost:5000/medical");
              return data;
            }
          },
          {
            path: "/home/clothing",
            element: <Clothing/>,
            loader: async () => {
              let { data } = await axios.get("http://localhost:5000/clothing");
              return data;
            }
          },
        

        ],
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

// axios is a library for making http request in react
// it is a promise based http
// it will return one resolved promise
