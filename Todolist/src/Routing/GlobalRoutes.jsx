import { createBrowserRouter } from "react-router-dom";
import Todolist from "../Component/Todolist";
import About from "../Component/About";
import Layout from "../Component/Layout";
import Home from "../Component/Home";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import UpdateToDo from './../Component/UpdateToDo';

export let projectRouting = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todolist",
        element: <Todolist />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/UpdateToDo",
    element: <UpdateToDo />,
  },
]);
