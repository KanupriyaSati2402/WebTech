import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewMore = () => {
    let data = useLocation();
    console.log(data);
  return (
    <div className=''>
        <img src={data.state.avatar_url} alt="image" />
          <h2>{data.state.login}</h2>
          <p>{data.state.id}</p>
      
    </div>
  )
}

export default ViewMore
