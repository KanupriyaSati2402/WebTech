import { createRoot } from 'react-dom/client';
import App from './App'
//refs in react 
// -- it is nothing buta reference 
//-- it is used to target any react element 
createRoot(document.getElementById("root")).render(<App/>)


//refs is nothing but reference
//it is used to target any react element
//to create that reference in fbc we have hook useRef() , in cbc it is already inbuild so how to use in we have createRef()
//for react font we can take from react font
// to use ref we have props ref, here we can use one ref for one element , for multiple multiple ref

