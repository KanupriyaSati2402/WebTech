import { createRoot } from 'react-dom/client';
import App from './App';
import "./global.css"

createRoot(document.getElementById("root")).render(<App/>)

// Component life cycle in FBC 
//-- in fbc we dont have life cycle methods by using hooks  we can achieve component life cycle method 


// className((isActive)=> isActive ? "Active" :"") 
// to show which link is active to highlight on which page we are in 