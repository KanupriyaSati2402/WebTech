import React from 'react'
import Nav from './Components/Nav'
import Firstsec from './Components/Firstsec';
import Secondsec from './Components/Secondsec';
import ThirdSec from './Components/ThirdSec';
import FourSec from './Components/FourSec';
import Section from './Components/Section';

const App = () => {
  return (
    <section>
    <Nav/>
    <Section/>
    <Firstsec/>
    <Secondsec/>
    <ThirdSec/>
    <FourSec/>
    </section>
  )
}

export default App
