import React from "react"
import image1 from "../assets/card1.webp"
import image2 from "../assets/card2.webp"
import image3 from "../assets/card3.webp"
import image4 from "../assets/card4.webp"
import image5 from "../assets/card5.webp"
import image6 from "../assets/card6.webp"
import image7 from "../assets/card7.webp"
import image8 from "../assets/card8.webp"

const Carousels =()=>{
    let data=[image1,image2,image3,image4,image5,image6,image7,image8];
    return <section className="carousels">
{data.map((ele,i)=>{
return <div className="cards" key={i}>
 <img className="image" src={ele}/> 
</div>

})}        {/*now this is a variable  */}  
    </section>
}
export default Carousels;
// 
//jsx expression -- to use any variable in jsx we have a concept called jsx expression 
// -- 