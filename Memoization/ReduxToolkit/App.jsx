import React from 'react'
import { Provider } from 'react-redux';
import store from './Store';
import Counter1 from './Counter1';


const App = () => {
  return (
   <Provider store={store}>
    <Counter1/>
   </Provider>
  )
}

export default App

// if there are many component then we will do routing only for we will be passing routing componrnt here 