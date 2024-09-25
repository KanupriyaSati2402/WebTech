import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { globalVar } from "../Context/GlobalContext";
import { useNavigate } from "react-router-dom";
 
const HouseHold = () => {
  let navigate = useNavigate();
  let { cartData, setCartData,update,setUpdate ,buyProduct,loginType,deleteCart} = useContext(globalVar);
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
      let { data } = await axios.get("http://localhost:5000/HouseHold");
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
              {loginType=="Admin" ? <><button className="update">Update</button> <button className="delete" onClick={()=>{deleteCart("HouseHold",ele.id)}}>Delete</button></> :
              <>
              {newArr.includes(cartData[i]?.id)? (
               console.log(newArr),
               console.log(cartData),
               console.log(newArr.includes(cartData[i]?.id)),
                <button disabled >
                  Added To Cart
                </button>
              ) : (
                <button    className="addtocart"
                onClick={() => {
                  handleSub(ele);
                }}>Add to cart</button>
              )}
              <button className="buynow" onClick={()=>{
                buyProduct(navigate,ele);
              }

              }>Buy Now</button>
              </>}
        
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HouseHold;
