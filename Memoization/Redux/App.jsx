import React from 'react'
import {Provider} from 'react-redux'
import store from './Store'
import Counter1 from './Counter1'
import AgeCalculator from './AgeCalculator'

const App = () => {
  return (
    // inside provider we have a prop named store 
    <Provider store={store}>
<Counter1/>
<AgeCalculator/>
    </Provider>
  )// inside provider we will give the component where we need to use the store 
}

export default App

