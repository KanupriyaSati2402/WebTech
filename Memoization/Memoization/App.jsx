import React from 'react'
import Counter1 from './Counter1'
import GlobalContextApi from './GlobalContextApi'
import Counter2 from './Counter2'

const App = () => {
  return (
    <GlobalContextApi>
         <Counter1/>
         <Counter2/>
    </GlobalContextApi>
     
    
  )
}

export default App
