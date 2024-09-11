import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HouseHold from '../Product/HouseHold';
import Electronics from '../Product/Electronics';
import Layout from './../components/Layout';
import Landing from "../components/Landing";
import Home from '../components/Home';
import Beauty from './../Product/Beauty';
import Medical from './../Product/Medical';
import RegisterPage from './../Pages/RegisterPage';
import LoginPage from './../Pages/LoginPage';
import About from '../Pages/About';
import Contact from './../Pages/Contact';
import axios from "axios";
import PageNotFound from "../components/PageNotFound";

export let projectRouting = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
        children:[
            {
                path:"/home/household",
                element:<HouseHold/>,
                loader:async()=>{
                  let {data}= await axios.get("http://localhost:5000/Electrical")
                  return data;
                }
            },
            {
                path:"/home/electrical",
                element:<Electronics/>,
                loader:async()=>{
                  let {data}= await axios.get("http://localhost:5000/medical")
                  return data;
                }
            },
            {
                path:"/home/beauty",
                element:<Beauty/>,
                loader:async()=>{
                  let {data}= await axios.get("http://localhost:5000/medical")
                  return data;
                }
            },
            {
                path:"/home/medical",
                element:<Medical/>,
                loader:async()=>{
                  let {data}= await axios.get("http://localhost:5000/medical")
                  return data;
                }
            }
        ]
      },
      {
        path: "/login",
        element: <LoginPage/>,
        loader:async()=>{
         let{data} = await axios.get('http://localhost:5000/Credentials') // will return a resolved promise 
        return data;
        }
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },{
        path:"*",
        element:<PageNotFound/>
      }

    ],
  },
]);

// axios is a library for making http request in react
// it is a promise based http 
// it will return one resolved promise 