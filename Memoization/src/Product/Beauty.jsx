import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Beauty = () => {
  let data1 = useLoaderData();
  return (
    <section className="House">
    {data1.map((ele, i) => {
      return (
        <div className="household">
          <div className="housecontent" key={i}>
          <img className="img1" src={ele.image} />
            <h2 className="title">Title :{ele.title}</h2>
            <h2 className="price">Price :{ele.price}</h2>
            {/* <h2>{ele.description}</h2> */}
           
          </div>
        </div>
      );
    })}
  </section>
  )}

export default Beauty
