import React from "react";
import GlobalContext from "./GlobalContext";
import { RouterProvider } from 'react-router-dom';
import { projectRouting } from "./GlobalRoutes";


const App = () => {
  return (
    <GlobalContext>
        <RouterProvider router={projectRouting}/>
    </GlobalContext>
  )
};

export default App;
