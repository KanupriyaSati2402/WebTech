import React from 'react'
import four1 from '../Assets/four1.jpg'
import four2 from '../Assets/four2.jpg'
import four3 from '../Assets/four3.jpg'
import four4 from '../Assets/four4.jpg'
import four5 from '../Assets/four5.jpg'
import four6 from '../Assets/four6.jpg'
import four7 from '../Assets/four7.jpg'
import four8 from '../Assets/four8.jpg'
import four9 from '../Assets/four9.jpg'
import four10 from '../Assets/four10.jpg'

const FourSec = () => {
    let data4=[four1,four2,four3,four4,four5,four6,four7,four8,four9,four10]
  return <section className='Foursec'>
    <h3>New in Dubbed International Movies</h3>
    <section>
    {data4.map((ele,i)=>{
      return  <div className='card4' key={i}>
            <img src={ele} className='image4'/>
        </div>
    })}
    </section>
  </section>
}

export default FourSec
