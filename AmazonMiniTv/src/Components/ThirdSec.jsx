import React from 'react'
import third1 from '../Assets/third1.jpg'
import third2 from '../Assets/third2.jpg'
import third3 from '../Assets/third3.jpg'
import third4 from '../Assets/third4.jpg'
import third5 from '../Assets/third5.jpg'
import third6 from '../Assets/third6.jpg'
import third7 from '../Assets/third7.jpg'
import third8 from '../Assets/third8.jpg'
import third9 from '../Assets/third9.jpg'
import third10 from '../Assets/third10.jpg'
import third11 from '../Assets/third11.jpg'

const ThirdSec = () => {
    let data3 =[third1,third2,third3,third4,third5,third6,third7,third8,third9,third10,third11]
  return <section className='Thirdsec'>
     <h3>New in Dubbed Series</h3>
     <section>
    {data3.map((ele,i)=>{
        return <div className='card3' key={i}>
            <img className='image3' src={ele}/>
        </div>
    })}
    </section>
  </section>
}

export default ThirdSec
