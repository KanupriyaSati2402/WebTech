import React from "react";
import { RouterProvider } from "react-router-dom";
import GlobalContext from "./globalcontext/GlobalContext";
import { projectRouting } from "./Routing/GlobalRoutes";

const App = () => {
  return (
    <div>
      <GlobalContext>
        <RouterProvider router={projectRouting} />
      </GlobalContext>

      {/* // used to start the routing  , we will wrap it iniside globalcontext because we need 
      to probide data in all components*/}
    </div>
  );
};

export default App;
