import React from 'react'
import GlobalContext from './Context/GlobalContext'
import { RouterProvider } from 'react-router-dom';
import { projectRouting } from './Routing/GlobalRouting'


const App = () => {
  return (
   
      <GlobalContext>
        <RouterProvider router={projectRouting} >

        </RouterProvider>
      </GlobalContext>
   
  )
}

export default App

//json-server --watch Database/db.json --port=5000
//serverName --watch foldername/filename --port=5000

