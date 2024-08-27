import React from 'react'
import ContextApi from './Components/ContextApi'
import Nav from './Components/Nav'
import AllUsers from './../../urban-company/src/Components/AllUsers';

const App = () => {
  return (
   
      <ContextApi>
      <Nav />
      <AllUsers />
      </ContextApi>
 
  )
}

export default App
