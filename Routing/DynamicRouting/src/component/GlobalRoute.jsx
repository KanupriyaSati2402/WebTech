import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Landing from './Landing'
import Layout from './Layout'
import Product from './Product'
import ViewMore from './ViewMore'

  export let route = createBrowserRouter([
        {
            path: "/home",
            element: <Layout/>,
            children: [
                {
                    path: "/home",
                    element: <Home/>,
                },
                {
                    path: "/home/login",
                    element: <Login/>,
                   loader: async () =>{
                        let response= await fetch ("https://api.github.com/users");
                        let data = await response.json();
                        return data;
                    }, 
                },
                {
                    path: "/home/register",
                    element: <Register/>
                },
            ],
        },
        {
            path: "/",
            element: <Landing/>
        },
        {
            path: "/product",
            element: <Product/>,
        },
        {
            path: "/viewmore/:id",
            element: <ViewMore/>,
        }
    ]);
  

