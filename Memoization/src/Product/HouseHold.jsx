import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { globalVar } from "../Context/GlobalContext";
const HouseHold = () => {
  let { cartData, setCartData,update,setUpdate } = useContext(globalVar);
  let [data1,setData1]=useState([]);
  console.log(data1);
  let handleSub = async (ele) => {
    await axios.post("http://localhost:5000/Cart", ele);
    let { data } = await axios.get(`http://localhost:5000/Cart/${ele.id}`);
    setUpdate(update+1)
  };

 let newArr= data1.map((ele)=>{
    let {id}=ele
    return id
  })


  useEffect(() => {
    let fetchHouseHold = async () => {
      let { data } = await axios.get("http://localhost:5000/Electrical");
      
      setData1(data)
    };
   
    fetchHouseHold();
  },[update]);
  return (
    <section className="House">
      {data1?.map((ele, i) => {
        return (
          <div className="household">
            <div className="housecontent" key={i}>
              <img className="img" src={ele.image} />
              <h2 className="title">Title :{ele.title}</h2>
              <h2 className="price">Price :{Math.round(ele.price * 83.930)}Rs</h2>
              {newArr.includes(cartData[i]?.id)? (
               console.log(newArr),
               console.log(cartData),
               console.log(newArr.includes(cartData[i]?.id)),
                <button
                disabled
                >
                  Added To Cart
                </button>
              ) : (
                <button     className="addtocart"
                onClick={() => {
                  handleSub(ele);
                }}>Add to cart</button>
              )}
              <button className="buynow">Buy Now</button>
              {/* <h2>{ele.description}</h2> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HouseHold;
