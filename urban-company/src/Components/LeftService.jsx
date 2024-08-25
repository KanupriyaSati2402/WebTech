import React from "react";
import ser1 from "../assets/ser1.webp";
import ser2 from "../assets/ser2.webp";
import ser3 from "../assets/ser3.webp";
import ser4 from "../assets/ser4.webp";
import ser6 from "../assets/ser6.webp";
import ser5 from "../assets/ser5.webp";
import ser7 from "../assets/ser7.webp";
import ser8 from "../assets/ser8.webp";

const LeftService = () => {
  let data1 = [ser1, ser2, ser3, ser4, ser5, ser6, ser7, ser8];
  return (
    <section className="left">
      <h1>Home services at your doorstep</h1>
      <article className="crd">
      {data1.map((ele,i)=>{
return <div className="sercard" key={i}>
 <img className="ser" src={ele}/> 
</div>
      })}
      </article>
      </section>
  );
};
export default LeftService;
