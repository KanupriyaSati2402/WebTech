import React from "react";
import salon1 from "../assets/salon1.webp";
import salon2 from "../assets/salon2.webp";
import salon3 from "../assets/salon3.webp";
import salon4 from "../assets/salon4.webp";

const Salon =()=>{
    let data3=[salon1,salon2,salon3,salon4];
    return <section className="salon">
        <h2>Salon for kids and men</h2>
{data3.map((ele,i)=>{
return <div className="sal" key={i}>
 <img className="salimage" src={ele}/> 
</div>

})}        {/*now this is a variable  */}  
    </section>
}
export default Salon;
