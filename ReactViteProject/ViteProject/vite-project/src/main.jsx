import {createRoot} from "react-dom/client" // in react dom File, client package
import App from "./App"

// the codes that are required to interact with the virtual dom that all are inside 
//react-dom library
// client is a package , there is a create root method inside it 

createRoot(document.getElementById("root")).render(<App/>) 
// will accept one html element 
// render method is used to render the content which we have to show on the webpage 

// work of createRoot 

//smallest part of webpage  -- componnets 
// components are reusable
// components are self contained
// components are independent
// every component file should be different 


// to make a component file there are some conventions 
//-- the name should be in parscelcase we should start component name with number and special character 
//-- we should not use space between 


// there are two types of components 
// 1. function based component
// 2. class based component

// syntax difference 
// 
