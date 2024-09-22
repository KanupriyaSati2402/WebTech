import React from 'react'

const Portal = () => {

  return (
  
        <div className="inner">
        </div>
      
  )
}

export default Portal

// all the popup when we want to render before the root where all the react components are being showen 
// one way of showing the pop up is conditional rendering 

// to show this popup outer we have a concept called Portals 

//portals are used to render some children into a different part of the dom 
// they allows us to define 
//modal 
//loader
// we have one method called createPortal (children,domNode,key?)
