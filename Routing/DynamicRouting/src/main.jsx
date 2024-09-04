import { createRoot } from "react-dom/client";
import App from "./App";
import './global.css';    
createRoot (document.getElementById("root")).render(<App/>)

//some extra features are present in createBrowserRouter like loader , actions,  fetchers.

//loader:- while we navigate then the data fetch and then action performe, loader is a key


//in routing there are some hook like uselocation() , usenavigation(), useloaderdata() , useparams()
//we cant use this in react , it is for routing only
//these all features are not in browserrouter but it present in it. 
//for rputing if we want to transfer some data we use uselocation 
//baseded on  the condition it will navigate in createbrowserrouter but in browser router we cant write any logic it will durectlly navigate
//we cant use hooks in any function