import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter ] = useState(10)
  

  //let counter = 10

  const addValue = () => {
    
    counter = counter + 1 
    setCounter(counter)
    console.log("clicked", counter);
    
  }

  const removeValue = () => {
    setCounter (counter- 1) 
  }

  return (
    <>
    <h1>New Porject on React </h1>
    <h2>Count the Value </h2>
    <button onClick={addValue}>Add Value {counter} </button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
