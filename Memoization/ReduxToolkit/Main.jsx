import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById("root")).render(<App/>)


//npm i @reduxjs/toolkit -- to install the reduc toolkit  
// npm i redux react-redux @reduxjs/toolkit to install redux and toolkit together 
// in redux we have action in reduc toolkit we say slice 
// we have method called createSlice to make the  it is inside redux toolkit 