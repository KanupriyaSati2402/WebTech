import React from 'react'
import section1 from '../Assets/section1.jpeg'
import section2 from '../Assets/section2.jpeg'
import section3 from '../Assets/section3.jpeg'
import section4 from '../Assets/section4.jpeg'

const Section = () => {
    let data4=[section1,section2,section3,section4]
    return <section className='Foursec'>
      <h3>Helllooooooooooooooooo</h3>
      <section>
      {data4.map((ele,i)=>{
        return  <div className='card4' key={i}>
              <img src={ele} className='image4'/>
          </div>
      })}
      </section>
    </section>
}

export default Section
