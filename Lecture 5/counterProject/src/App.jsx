import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [value, updateValue] =  useState(0)

  function increment(){
    if(value < 20){
      value++
      updateValue(value)
    }
  }

  function decrement(){
    if(value > 0){
      value--
      updateValue(value)
    }
  }

  return (
    <>
    
    <h1>Counter : {value}</h1>

    <br />

    <button onClick={increment} >
      Increase
    </button>

    <br />

    <button onClick={decrement} >
      Decrease
    </button>

    </>
  )
}

export default App
