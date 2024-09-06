import { createRoot } from 'react-dom/client';
import App from './App';
import "./global.css"

createRoot(document.getElementById("root")).render(<App/>)

{/* to define the element we have element  and home is main (parent) page so that's why it has / only */}
// this all things is present in react-router-dom i.e route , routes