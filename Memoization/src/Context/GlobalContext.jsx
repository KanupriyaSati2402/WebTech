import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import AxiosInstance from '../axiosInstance/AxiosInstance';

export let globalVar =createContext();
const GlobalContext = ({children}) => {
    let { Provider } = globalVar;
    let [cartData,setCartData] =useState([]);
    let [update,setUpdate]=useState(0);
    let [deleteCount,setDeleteCount] =useState(0);

    useEffect(()=>{ // we can't make the function inside useEffect async 

      let func=async()=>{
       let {data}= await AxiosInstance.get("/Cart")

       setCartData(data);
      }
      func();
    },[deleteCount,update]) 
  return (
    <Provider value={{cartData,setCartData,deleteCount,setDeleteCount,update,setUpdate}}>{children}</Provider>
  )
}

export default GlobalContext
