import { createRoot } from "react-dom/client";
import App from './App'

createRoot(document.getElementById("root")).render(<App/>)

//in controlled component = we can easily handle the control , Controlled by the parent component.	
//to control that component we will use event and state to handle the data , it is storing in state object
//when we modify state component complete component will re-render bcz it has state

// in uncontrolled component = they are not in our control , Controlled by the DOM itself.
//to control this uncontrolled component data  we use refs , it is storing in element's internal storage
//in uncontrolled we will not use event and state


// it store the changes in internal storage in Uncontrolled component,
//(like username we are updating in input field, then it storing the internal storage)
// when state object modify or update complete component will rerender
//we are storing the changes data in state object and event in controlled component
//use ref is interact with real dom , we dont use much refs , we use control
