import { createBrowserRouter } from "react-router-dom";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Layout from "./Layout";


export let projectRouting = createBrowserRouter([{
    path :"/",
    element:<Layout/>,

    children:[
     {
        path:"/",
        element:<Counter1/>
     },
     {
        path:"/counter2",
        element:<Counter2/>
     },
    ],
},
]);