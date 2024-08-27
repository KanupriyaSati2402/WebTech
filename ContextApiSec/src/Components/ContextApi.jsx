import React, { createContext } from "react";
import book1ser from "../asset/book1ser.webp"
import book2sec from "../asset/book2sec.webp"
import book3sec from "../asset/book3sec.webp"
import book4sec from "../asset/book4sec.webp"
import book5sec from "../asset/book5sec.webp"
import book6sec from "../asset/book6sec.webp"
import book7sec from "../asset/book7sec.webp"
import book8sec from "../asset/book8sec.webp"
import book9sec from "../asset/book9sec.webp"
// ek project mai ek hi context api ho skta 

export let globalVar = createContext();
const ContextApi = ({ children }) => {
  let { Provider } = globalVar;
  let d = [
    {
      image : book1ser,
      Rating:"" ,
      Title: "",
      Price:"",
    },
    {
      image : book2sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },
    {
      image : book3sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  {
      image : book4sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  {
      image : book5sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  {
      image : book6sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  {
      image : book7sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  {
      image : book8sec,
      Rating:"" ,
      Title: "",
      Price:"",
    },  
    {
      image : book9sec,
      Rating:"" ,
      Title: "",
      Price:"",
    }, 

  ];
  return <Provider value={d}>{children}</Provider>;
};

export default ContextApi;
