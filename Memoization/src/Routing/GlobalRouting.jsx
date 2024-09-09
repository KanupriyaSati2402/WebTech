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
            },
            {
                path:"/home/electronics",
                element:<Electronics/>,
            },
            {
                path:"/home/beauty",
                element:<Beauty/>,
            },
            {
                path:"/home/medical",
                element:<Medical/>,
            }
        ]
      },
      {
        path: "/login",
        element: <LoginPage/>,
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
      }

    ],
  },
]);
