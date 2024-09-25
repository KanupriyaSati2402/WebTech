import React from 'react'
import { Provider } from 'react-redux';
import Counter from './Counter';
import Counter2 from './Counter2';
import store1 from './Store1';

const App = () => {
  return (
    <Provider store={store1}>
<Counter/>
{/* <Counter2/> */}
    </Provider>
  )
}

export default App
